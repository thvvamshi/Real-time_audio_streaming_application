<h1 align="center">🎵 Real-Time Audio Streaming Platform</h1>

<p align="center">
A full-stack music streaming platform that combines music playback, social interaction, and real-time user activity into a modern listening experience.
</p>

---

## About The Project

I built this project to explore how modern streaming platforms combine media delivery, real-time communication, user presence, and content management into a seamless experience.

The platform allows users to listen to music, discover albums, interact with other listeners in real time, and view live listening activity. An integrated admin dashboard makes it easy to manage music content, while analytics provide insights into platform usage.

The project focuses heavily on real-time features using Socket.IO and demonstrates full-stack application development with authentication, media management, and scalable architecture patterns.

---

## Features

### 🎵 Music Streaming

* Stream songs in real time
* Play, pause, next, and previous controls
* Volume adjustment slider
* Album browsing experience
* Queue management
* Responsive audio player

### 💬 Real-Time Communication

* Built-in chat system
* Live user presence detection
* Online and offline status tracking
* Instant messaging using Socket.IO

### 👀 Live Listening Activity

* View what other users are listening to
* Real-time listening updates
* Shared listening experience

### 🎧 Admin Dashboard

* Create albums
* Upload songs
* Manage music library
* Organize content efficiently

### 📊 Analytics

* Platform usage insights
* Album statistics
* Song analytics
* User activity monitoring

### 🔐 Authentication

* Secure user authentication
* Clerk integration
* Protected routes
* Session management

---

## Tech Stack

### Frontend

* React
* React Router
* Tailwind CSS
* Axios
* Socket.IO Client

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO

### Cloud Services

* Cloudinary
* Clerk Authentication

---

## Architecture

```text id="g7k25q"
Client
   │
   ▼
React Frontend
   │
   ▼
Socket.IO + REST APIs
   │
   ▼
Node.js / Express
   │
   ├── Authentication (Clerk)
   ├── Music Management
   ├── Chat Service
   ├── Analytics Service
   └── User Presence Service
   │
   ▼
MongoDB
   │
   ▼
Cloudinary Media Storage
```

---

## Project Structure

```text id="6gw8k7"
project-root
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── models
│   │   ├── middleware
│   │   ├── services
│   │   └── lib
│   │
│   └── package.json
│
└── README.md
```

---

## Setup .env File in Backend

```env id="75bjlwm"
PORT=

MONGODB_URI=

ADMIN_EMAIL=

NODE_ENV=

CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_CLOUD_NAME=

CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

---

## Setup .env File in Frontend

```env id="4e8n7d"
VITE_CLERK_PUBLISHABLE_KEY=
```

---

## Installation

### Clone Repository

```bash id="h31qjh"
git clone <repository-url>

cd real-time-audio-streaming-platform
```

### Backend Setup

```bash id="jlwmj6"
cd backend

npm install

npm run dev
```

### Frontend Setup

```bash id="aj0vxg"
cd frontend

npm install

npm run dev
```

---

## Core Engineering Concepts

This project demonstrates experience with:

* Full-Stack Application Development
* Real-Time Communication
* WebSocket Architecture
* Media Management Systems
* Authentication & Authorization
* Cloud Storage Integration
* Analytics Systems
* State Management
* REST API Design
* Scalable Backend Architecture

---

## Future Improvements

* Playlist Creation
* Music Recommendations
* Social Following System
* Collaborative Listening Rooms
* Notification System
* Mobile Application
* Premium Subscription Features
* Personalized Music Discovery

---

## Learning Outcomes

Through this project I gained hands-on experience building:

* Real-time systems using Socket.IO
* Secure authentication workflows
* Media streaming applications
* Cloudinary-based file management
* Analytics dashboards
* Modern React applications
* Scalable Node.js backends

---

## License

MIT License

---

## Author

**Vamshi Kumar**

Software Developer | Full-Stack Engineer | Backend & System Design Enthusiast
