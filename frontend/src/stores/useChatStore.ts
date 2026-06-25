import { axiosInstance } from "@/lib/axios";
import { Message, User } from "@/types";
import { create } from "zustand";
import { io } from "socket.io-client";

interface ChatStore {
  users: User[];
  isLoading: boolean;
  error: string | null;
  socket: any;
  isConnected: boolean;
  onlineUsers: Set<string>;
  userActivities: Map<string, string>;
  messages: Message[];
  selectedUser: User | null;

  fetchUsers: () => Promise<void>;
  initSocket: (userId: string) => void;
  disconnectSocket: () => void;
  sendMessage: (receiverId: string, senderId: string, content: string) => void;
  fetchMessages: (userId: string) => Promise<void>;
  setSelectedUser: (user: User | null) => void;
}

const baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000"
    : window.location.origin;

const socket = io(baseURL, {
  autoConnect: false,
  withCredentials: true,
  transports: ["websocket", "polling"],
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
});

export const useChatStore = create<ChatStore>((set, get) => ({
  users: [],
  isLoading: false,
  error: null,
  socket: socket,
  isConnected: false,
  onlineUsers: new Set(),
  userActivities: new Map(),
  messages: [],
  selectedUser: null,

  setSelectedUser: (user) => set({ selectedUser: user }),

  fetchUsers: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get("/users");
      set({ users: response.data });
    } catch (error: any) {
      set({ error: error.response.data.message });
    } finally {
      set({ isLoading: false });
    }
  },

  initSocket: (userId) => {
    if (get().isConnected) return;

    socket.auth = { userId };

    socket.removeAllListeners();

    socket.connect();

    socket.emit("user_connected", userId);

    socket.on("connect", () => {
      console.log("✅ Connected:", socket.id);
    });

    socket.on("connect_error", (err) => {
      console.error("❌ Socket connection error:", err.message);
    });

    socket.on("disconnect", (reason) => {
      console.log("❌ Disconnected:", reason);
    });

    socket.on("users_online", (users: string[]) => {
      set({ onlineUsers: new Set(users) });
    });

    socket.on("activities", (activities: [string, string][]) => {
      set({ userActivities: new Map(activities) });
    });

    socket.on("user_connected", (userId: string) => {
      set((state) => ({
        onlineUsers: new Set([...state.onlineUsers, userId]),
      }));
    });

    socket.on("user_disconnected", (userId: string) => {
      set((state) => {
        const users = new Set(state.onlineUsers);
        users.delete(userId);
        return { onlineUsers: users };
      });
    });

    socket.on("receive_message", (message: Message) => {
      set((state) => ({
        messages: [...state.messages, message],
      }));
    });

    socket.on("message_sent", (message: Message) => {
      set((state) => ({
        messages: [...state.messages, message],
      }));
    });

    socket.on("activity_updated", ({ userId, activity }) => {
      set((state) => {
        const activities = new Map(state.userActivities);
        activities.set(userId, activity);
        return { userActivities: activities };
      });
    });

    set({ isConnected: true });
  },

  disconnectSocket: () => {
    if (!get().isConnected) return;

    socket.off();
    socket.disconnect();

    set({ isConnected: false });
  },

  sendMessage: async (receiverId, senderId, content) => {
    const socket = get().socket;
    if (!socket) return;

    socket.emit("send_message", { receiverId, senderId, content });
  },

  fetchMessages: async (userId: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get(`/users/messages/${userId}`);
      set({ messages: response.data });
    } catch (error: any) {
      set({ error: error.response.data.message });
    } finally {
      set({ isLoading: false });
    }
  },
}));
