import { Server } from "socket.io";
import { Message } from "../models/message.model.js";

export const initializeSocket = (server) => {
  const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
    process.env.CLIENT_URL,
  ].filter(Boolean);

  const io = new Server(server, {
    path: "/socket.io",

    cors: {
      origin: allowedOrigins,
      methods: ["GET", "POST"],
      credentials: true,
    },

    transports: ["websocket", "polling"],
  });

  // Debug Socket.IO handshake errors
  io.engine.on("connection_error", (err) => {
    console.error("========== SOCKET.IO ERROR ==========");
    console.error("Code:", err.code);
    console.error("Message:", err.message);
    console.error("Context:", err.context);
    console.error("=====================================");
  });

  const userSockets = new Map();
  const userActivities = new Map();

  io.on("connection", (socket) => {
    console.log(`✅ Socket Connected: ${socket.id}`);

    socket.on("user_connected", (userId) => {
      console.log(`👤 User Connected: ${userId}`);

      userSockets.set(userId, socket.id);
      userActivities.set(userId, "Idle");

      io.emit("user_connected", userId);

      socket.emit("users_online", [...userSockets.keys()]);
      io.emit("activities", [...userActivities.entries()]);
    });

    socket.on("update_activity", ({ userId, activity }) => {
      userActivities.set(userId, activity);

      io.emit("activity_updated", {
        userId,
        activity,
      });
    });

    socket.on("send_message", async ({ senderId, receiverId, content }) => {
      try {
        const message = await Message.create({
          senderId,
          receiverId,
          content,
        });

        const receiverSocketId = userSockets.get(receiverId);

        if (receiverSocketId) {
          io.to(receiverSocketId).emit("receive_message", message);
        }

        socket.emit("message_sent", message);
      } catch (err) {
        console.error("Message Error:", err);
        socket.emit("message_error", err.message);
      }
    });

    socket.on("disconnect", (reason) => {
      console.log(`❌ Socket Disconnected: ${socket.id}`);
      console.log("Reason:", reason);

      let disconnectedUserId = null;

      for (const [userId, socketId] of userSockets.entries()) {
        if (socketId === socket.id) {
          disconnectedUserId = userId;
          break;
        }
      }
      if (disconnectedUserId) {
        userSockets.delete(disconnectedUserId);
        userActivities.delete(disconnectedUserId);
        io.emit("user_disconnected", disconnectedUserId);
      }
    });
  });

  return io;
};
