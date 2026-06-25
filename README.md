# 🎵 Real-Time Audio Streaming Platform

<p align="center">
A full-stack Spotify-inspired music streaming platform featuring real-time chat, live listening activity, secure authentication, media management, and an admin dashboard.
</p>

<p align="center">

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![Socket.IO](https://img.shields.io/badge/Socket.IO-Realtime-black)
![Clerk](https://img.shields.io/badge/Authentication-Clerk-purple)
![Cloudinary](https://img.shields.io/badge/Storage-Cloudinary-blue)

</p>

### 🚀 Live Demo

Frontend : https://real-time-audio-streaming-application-koa2.onrender.com

Backend API : https://real-time-audio-streaming-application.onrender.com

---

# 📖 Overview

This project is a modern music streaming application inspired by Spotify that combines music playback, social interaction, and real-time communication into one seamless platform.

Users can stream songs, browse albums, chat with other listeners, and see what friends are currently listening to. Administrators can manage songs and albums through a dedicated dashboard while media assets are securely stored on Cloudinary.

The application demonstrates modern full-stack engineering practices including secure authentication, REST APIs, WebSocket communication, cloud storage integration, and scalable application architecture.

---

# ✨ Features

## 🎵 Music Streaming

* Stream music instantly
* Play / Pause controls
* Next & Previous song navigation
* Volume control
* Queue management
* Album browsing
* Responsive music player

---

## 💬 Real-Time Chat

* One-to-one messaging
* Instant message delivery using Socket.IO
* Previous conversation history
* Online/Offline user status
* Live connection updates

---

## 👀 Live Listening Activity

* Display what users are currently listening to
* Live activity updates
* User presence tracking
* Idle status detection

---

## 👨‍💼 Admin Dashboard

* Upload songs
* Upload album artwork
* Create albums
* Delete songs
* Delete albums
* Cloudinary media uploads
* Music library management

---

## 📊 Analytics Dashboard

* Total Songs
* Total Albums
* Total Users
* Platform statistics

---

## 🔐 Authentication

* Clerk Authentication
* JWT-based API authorization
* Protected routes
* Admin authorization
* Session management

---

# 🛠 Tech Stack

## Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Zustand
* Axios
* React Router
* Socket.IO Client
* Radix UI
* Lucide Icons

---

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* Express File Upload
* Node Cron

---

## Cloud Services

* Cloudinary
* Clerk Authentication

---

# 🏗 Architecture

```text
                    React + TypeScript
                           │
                           ▼
                  REST API + Socket.IO
                           │
                           ▼
                    Node.js + Express
        ┌──────────────────────────────────┐
        │ Authentication (Clerk)           │
        │ Song Management                  │
        │ Album Management                 │
        │ Chat Service                     │
        │ Analytics Service                │
        │ User Presence Service            │
        └──────────────────────────────────┘
                   │               │
                   ▼               ▼
              MongoDB         Cloudinary
```

---

# 📁 Project Structure

```text
real-time-audio-streaming-platform

├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── stores
│   │   ├── providers
│   │   ├── hooks
│   │   └── lib
│   └── package.json
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── lib
│   │   └── socket
│   └── package.json
│
└── README.md
```

---

# ⚙ Environment Variables

## Backend (.env)

```env
PORT=

MONGODB_URI=

NODE_ENV=

CLIENT_URL=

ADMIN_EMAIL=

CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_CLOUD_NAME=

CLERK_SECRET_KEY=
CLERK_PUBLISHABLE_KEY=
```

---

## Frontend (.env)

```env
VITE_CLERK_PUBLISHABLE_KEY=
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/your-username/real-time-audio-streaming-platform.git

cd real-time-audio-streaming-platform
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 📡 REST API

### Authentication

```
GET /api/auth/callback
```

### Songs

```
GET    /api/songs
POST   /api/admin/songs
DELETE /api/admin/songs/:id
```

### Albums

```
GET    /api/albums
POST   /api/admin/albums
DELETE /api/admin/albums/:id
```

### Users

```
GET /api/users
GET /api/users/messages/:userId
```

### Statistics

```
GET /api/stats
```

---

# 🔄 Real-Time Events

### Socket.IO

```
user_connected

user_disconnected

send_message

receive_message

message_sent

update_activity

activity_updated

users_online
```

---

# 🧠 Engineering Concepts

This project demonstrates:

* Full Stack Development
* REST API Design
* Real-Time Communication
* WebSocket Architecture
* Authentication & Authorization
* State Management with Zustand
* Cloud Storage Integration
* Media Upload Pipelines
* MongoDB Data Modeling
* File Upload Handling
* Scalable Backend Architecture
* Client-Server Communication

---

# 📸 Screenshots

Add screenshots here after deployment.

```
Home Page

Music Player

Chat

Admin Dashboard

Analytics
```

---

# 🚀 Future Improvements

* Playlist creation
* Like & favorite songs
* Search functionality
* Music recommendations
* User profiles
* Follow system
* Collaborative listening rooms
* Notifications
* Dark/Light themes
* Mobile application
* Premium subscriptions

---

# 📚 Learning Outcomes

While building this project I gained practical experience with:

* Building scalable MERN applications
* Socket.IO real-time communication
* Clerk authentication
* Cloudinary media uploads
* MongoDB schema design
* Zustand state management
* Secure REST API development
* Production-ready application architecture

---

# 📄 License

MIT License

---

# 👨‍💻 Author

**Boda Vamshi Kumar**

Full Stack Developer | Backend Developer | MERN Stack Enthusiast

GitHub: https://github.com/thvvamshi

LinkedIn: https://linkedin.com/in/bodavamshikumar
