# 🎵 Real-Time Audio Streaming Platform

A full-stack Spotify-inspired music streaming application with real-time chat, online presence, admin dashboard, and secure authentication.

## 🚀 Live Demo

**Application:** https://real-time-audio-streaming-application.onrender.com

---

# ✨ Features

- 🎵 Music Streaming
- ❤️ Featured, Trending & Made For You playlists
- 💬 Real-time chat using Socket.IO
- 🟢 Online user status
- ✍️ User activity indicators
- 🔐 Authentication using Clerk
- 👑 Admin Dashboard
- ☁️ Cloudinary image & audio uploads
- 📊 Dashboard statistics
- 📱 Fully responsive UI

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- Axios
- Clerk
- Socket.IO Client

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- Cloudinary
- Clerk
- Express File Upload
- Node Cron

---

# Project Structure

```
.
├── backend/
├── frontend/
├── package.json
└── README.md
```

---

# Local Setup

## Clone Repository

```bash
git clone https://github.com/thvvamshi/Real-time_audio_streaming_application.git

cd Real-time_audio_streaming_application
```

## Install Dependencies

```bash
npm install

cd backend
npm install

cd ../frontend
npm install
```

---

# Backend Environment Variables

Create:

```
backend/.env
```

```env
PORT=5000

NODE_ENV=development

MONGODB_URI=your_mongodb_uri

ADMIN_EMAIL=your_admin_email

CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

CLIENT_URL=http://localhost:5173
```

---

# Frontend Environment Variables

Create:

```
frontend/.env
```

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:5000
```

---

# Run Locally

Backend

```bash
cd backend
npm run dev
```

Frontend

```bash
cd frontend
npm run dev
```

---

# Production Deployment (Render)

This project is deployed as **a single Render Web Service**, where the Express backend serves the built React application.

## Why Single Deployment?

Instead of deploying the frontend and backend separately, the React application is built during deployment and served directly from the Express server. This avoids CORS issues, simplifies Socket.IO communication, and ensures Clerk authentication works on the same origin. :contentReference[oaicite:0]{index=0}

---

## Root package.json

```json
{
  "scripts": {
    "build": "npm install --prefix backend && npm install --prefix frontend && npm run build --prefix frontend",
    "start": "npm start --prefix backend"
  }
}
```

---

## Backend Configuration

Express serves the React production build:

```js
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "../frontend/dist/index.html")
  );
});
```

---

## Axios Configuration

```ts
const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : "/api";
```

---

## Socket.IO Configuration

```ts
const socket = io("/", {
  autoConnect: false,
  withCredentials: true,
});
```

---

## Render Configuration

| Setting | Value |
|----------|-------|
| Environment | Node |
| Branch | master |
| Root Directory | *(leave blank)* |
| Build Command | `npm run build` |
| Start Command | `npm start` |
| Auto Deploy | Enabled |

---

## Production Environment Variables

```env
PORT=10000

NODE_ENV=production

MONGODB_URI=your_mongodb_uri

ADMIN_EMAIL=your_admin_email

CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> No `VITE_API_URL` or `CLIENT_URL` is required because the frontend and backend are served from the same domain.

---

# Deployment Workflow

1. Push code to GitHub.
2. Render automatically pulls the latest commit.
3. Backend dependencies are installed.
4. Frontend dependencies are installed.
5. React application is built.
6. Express serves the generated `frontend/dist` files.
7. Socket.IO, REST APIs, and React are available from the same Render URL. :contentReference[oaicite:1]{index=1}

---

# Future Improvements

- Music queue
- Playlist sharing
- Like songs
- Search functionality
- Notifications
- User profiles
- Dark/Light theme
- Recently played history

---

# Author

**Vamshi Kumar**

GitHub: https://github.com/thvvamshi

LinkedIn: https://www.linkedin.com/in/bodavamshikumar/