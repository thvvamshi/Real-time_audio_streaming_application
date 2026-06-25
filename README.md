# 🎵 Real-Time Audio Streaming Platform

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?logo=react" />
  <img src="https://img.shields.io/badge/Node.js-Express-green?logo=node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb" />
  <img src="https://img.shields.io/badge/Socket.IO-Real--Time-black?logo=socketdotio" />
  <img src="https://img.shields.io/badge/Clerk-Authentication-purple" />
  <img src="https://img.shields.io/badge/Cloudinary-Media-orange" />
  <img src="https://img.shields.io/badge/License-MIT-blue" />
</p>

<p align="center">
A full-stack Spotify-inspired music streaming platform built with React, Node.js, Express, MongoDB, Socket.IO, Clerk Authentication, and Cloudinary. The application provides real-time messaging, online user presence, live listening activity, music streaming, and an admin dashboard for managing songs and albums.
</p>

---

# 🚀 Live Demo

### Production

https://real-time-audio-streaming-application.onrender.com

---

# 📌 Project Overview

This project demonstrates how a modern music streaming platform is built using a scalable full-stack architecture.

The application combines:

* Secure Authentication using Clerk
* REST APIs with Express.js
* Real-time communication using Socket.IO
* MongoDB for persistent storage
* Cloudinary for audio and image hosting
* React + TypeScript frontend
* Zustand state management
* Responsive UI built with Tailwind CSS

Unlike traditional CRUD projects, this application implements real-time features similar to Spotify and Discord, including live chat, online user tracking, activity updates, and media streaming.

---

# ✨ Features

## 🎵 Music Streaming

* Browse albums
* Browse songs
* Featured songs
* Trending songs
* Made For You playlists
* Audio player
* Previous / Next controls
* Volume control
* Queue management

---

## 💬 Real-Time Chat

* One-to-one messaging
* Instant message delivery
* Persistent chat history
* Online user detection
* Socket.IO powered communication

---

## 🟢 User Presence

* Online users
* Offline users
* Live activity updates
* Current listening status

---

## 👑 Admin Dashboard

* Upload songs
* Upload albums
* Manage music library
* Dashboard analytics

---

## 🔐 Authentication

* Clerk Authentication
* JWT based authorization
* Protected routes
* Admin authorization
* Session management

---

## ☁️ Cloud Storage

* Upload MP3 files
* Upload album artwork
* Cloudinary integration
* Temporary file cleanup using Cron Jobs

---

## 📊 Dashboard Analytics

* Total songs
* Total albums
* Total registered users

---

# 🛠 Tech Stack

## Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Zustand
* Axios
* Clerk React SDK
* Socket.IO Client
* React Router DOM

---

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* Clerk Express SDK
* Express File Upload
* Node Cron

---

## Cloud Services

* MongoDB Atlas
* Cloudinary
* Clerk
* Render

---

# 🏗 System Architecture

```text
                    Browser
                       │
                       ▼
          React + TypeScript Frontend
                       │
             Axios + Socket.IO Client
                       │
        ┌──────────────┴──────────────┐
        │                             │
        ▼                             ▼
    REST API                     WebSocket
        │                             │
        └──────────────┬──────────────┘
                       ▼
              Express.js Backend
                       │
     ┌─────────────────┼─────────────────┐
     │                 │                 │
 Authentication   Cloudinary Upload   Socket.IO
     │                 │                 │
     └─────────────────┼─────────────────┘
                       ▼
                  MongoDB Atlas
```

---

# 📂 Project Structure

```
Real-time_audio_streaming_application

│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── lib
│   │   ├── utils
│   │   └── index.js
│   │
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── stores
│   │   ├── hooks
│   │   ├── providers
│   │   └── lib
│   │
│   └── package.json
│
├── package.json
│
└── README.md
```

---

# ⚙ Local Installation

## Clone Repository

```bash
git clone https://github.com/thvvamshi/Real-time_audio_streaming_application.git

cd Real-time_audio_streaming_application
```

---

## Install Dependencies

```bash
npm install

cd backend
npm install

cd ../frontend
npm install
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
PORT=5000

NODE_ENV=development

MONGODB_URI=

ADMIN_EMAIL=

CLIENT_URL=http://localhost:5173

CLERK_SECRET_KEY=

CLERK_PUBLISHABLE_KEY=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=
```

---

## Frontend (.env)

```env
VITE_CLERK_PUBLISHABLE_KEY=

VITE_API_URL=http://localhost:5000
```

---

# ▶ Running the Application

## Backend

```bash
cd backend

npm run dev
```

---

## Frontend

```bash
cd frontend

npm run dev
```

---

# 🚀 Production Deployment

This application is deployed as a **single Render Web Service**, where the Express backend serves the built React frontend.

## Why Single Deployment?

* No CORS issues
* Same-origin authentication
* Socket.IO works seamlessly
* Easier deployment and maintenance
* Single production URL

---

## Render Configuration

| Setting        | Value           |
| -------------- | --------------- |
| Environment    | Node            |
| Branch         | master          |
| Root Directory | Leave Blank     |
| Build Command  | `npm run build` |
| Start Command  | `npm start`     |

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

## Express Production Configuration

```javascript
app.use(express.static("../frontend/dist"));

app.get("*", (req, res) => {
    res.sendFile("../frontend/dist/index.html");
});
```

---

## Deployment Workflow

1. Push code to GitHub
2. Render clones repository
3. Backend dependencies install
4. Frontend dependencies install
5. React production build generated
6. Express serves frontend build
7. MongoDB Atlas connects
8. Cloudinary uploads enabled
9. Socket.IO initialized
10. Application becomes live

```
```
# 📡 REST API Documentation

The backend exposes a RESTful API secured using **Clerk Authentication**. All protected endpoints require a valid Clerk JWT in the `Authorization` header.

---

# Base URL

## Development

```
http://localhost:5000/api
```

## Production

```
https://real-time-audio-streaming-application.onrender.com/api
```

---

# Health Check

## GET `/health`

Returns the server status.

### Response

```json
{
  "status": "OK",
  "message": "Server is running"
}
```

---

# Authentication

## POST `/api/auth/callback`

Creates or updates the authenticated user after Clerk login.

### Authentication

Required

### Response

```json
{
  "_id": "...",
  "clerkId": "...",
  "fullName": "Vamshi Kumar",
  "email": "example@gmail.com",
  "imageUrl": "..."
}
```

---

# Users API

## GET `/api/users`

Returns all registered users except the current user.

### Authentication

Required

### Response

```json
[
  {
    "_id": "...",
    "fullName": "John Doe",
    "imageUrl": "...",
    "clerkId": "..."
  }
]
```

---

## GET `/api/users/messages/:userId`

Returns complete chat history between the logged-in user and another user.

### Authentication

Required

### Response

```json
[
  {
    "_id": "...",
    "senderId": "...",
    "receiverId": "...",
    "content": "Hello",
    "createdAt": "2026-06-25T10:30:00Z"
  }
]
```

---

# Songs API

## GET `/api/songs`

Returns all songs.

---

## GET `/api/songs/featured`

Returns featured songs displayed on the home page.

### Response

```json
[
  {
    "_id": "...",
    "title": "Believer",
    "artist": "Imagine Dragons",
    "imageUrl": "...",
    "audioUrl": "...",
    "duration": 204
  }
]
```

---

## GET `/api/songs/made-for-you`

Returns personalized recommendations.

---

## GET `/api/songs/trending`

Returns currently trending songs.

---

## GET `/api/songs/:songId`

Returns a specific song.

---

# Albums API

## GET `/api/albums`

Returns all albums.

### Response

```json
[
  {
    "_id": "...",
    "title": "Evolve",
    "artist": "Imagine Dragons",
    "imageUrl": "...",
    "releaseYear": 2017
  }
]
```

---

## GET `/api/albums/:albumId`

Returns album details with associated songs.

### Response

```json
{
  "_id": "...",
  "title": "Evolve",
  "artist": "Imagine Dragons",
  "songs": []
}
```

---

# Admin API

> All endpoints require the logged-in user to match the configured `ADMIN_EMAIL`.

---

## GET `/api/admin/check`

Checks whether the authenticated user is an administrator.

### Response

```json
{
  "admin": true
}
```

or

```json
{
  "admin": false
}
```

---

## POST `/api/admin/albums`

Creates a new album.

### Multipart Form

| Field       | Type   |
| ----------- | ------ |
| title       | Text   |
| artist      | Text   |
| releaseYear | Number |
| imageFile   | Image  |

### Response

```json
{
  "success": true,
  "album": {}
}
```

---

## POST `/api/admin/songs`

Uploads a new song.

### Multipart Form

| Field     | Type   |
| --------- | ------ |
| title     | Text   |
| artist    | Text   |
| duration  | Number |
| albumId   | String |
| imageFile | Image  |
| audioFile | MP3    |

### Response

```json
{
  "success": true,
  "song": {}
}
```

---

# Statistics API

## GET `/api/stats`

Returns dashboard statistics.

### Response

```json
{
  "totalUsers": 18,
  "totalSongs": 72,
  "totalAlbums": 12
}
```

---

# Socket.IO Events

The application uses Socket.IO for all real-time functionality.

---

## Client → Server Events

### user_connected

```javascript
socket.emit("user_connected", userId);
```

Registers a user as online.

---

### send_message

```javascript
socket.emit("send_message", {
    senderId,
    receiverId,
    content
});
```

Sends a private message.

---

### update_activity

```javascript
socket.emit("update_activity", {
    userId,
    activity
});
```

Updates the user's listening status.

---

# Server → Client Events

## users_online

Returns all online users.

```javascript
[
    "user1",
    "user2",
    "user3"
]
```

---

## user_connected

Broadcast when a new user connects.

---

## user_disconnected

Broadcast when a user disconnects.

---

## receive_message

```json
{
  "_id":"...",
  "senderId":"...",
  "receiverId":"...",
  "content":"Hello",
  "createdAt":"..."
}
```

---

## message_sent

Confirms successful message delivery.

---

## activities

Returns all user listening activities.

```javascript
[
    ["user1","Listening to Believer"],
    ["user2","Idle"]
]
```

---

## activity_updated

Broadcasts activity changes.

---

# Authentication Flow

```text
User

↓

Clerk Login

↓

JWT Token

↓

Axios Authorization Header

↓

Express Middleware

↓

Protected Route

↓

Controller

↓

MongoDB
```

---

# Database Models

## User

| Field    | Type     |
| -------- | -------- |
| _id      | ObjectId |
| clerkId  | String   |
| fullName | String   |
| email    | String   |
| imageUrl | String   |

---

## Song

| Field    | Type     |
| -------- | -------- |
| title    | String   |
| artist   | String   |
| imageUrl | String   |
| audioUrl | String   |
| duration | Number   |
| albumId  | ObjectId |

---

## Album

| Field       | Type   |
| ----------- | ------ |
| title       | String |
| artist      | String |
| imageUrl    | String |
| releaseYear | Number |

---

## Message

| Field      | Type   |
| ---------- | ------ |
| senderId   | String |
| receiverId | String |
| content    | String |
| createdAt  | Date   |

---

# Error Responses

## 400 Bad Request

```json
{
    "message":"Invalid request"
}
```

---

## 401 Unauthorized

```json
{
    "message":"Unauthorized"
}
```

---

## 403 Forbidden

```json
{
    "message":"Access denied"
}
```

---

## 404 Not Found

```json
{
    "message":"Resource not found"
}
```

---

## 500 Internal Server Error

```json
{
    "message":"Internal server error"
}
```

---

# Performance Features

* RESTful API Design
* Socket.IO WebSockets
* Cloudinary Media Storage
* MongoDB Atlas Cloud Database
* Real-time Online Presence
* JWT Authentication
* Responsive Design
* Protected Admin Dashboard
* Automatic Temporary File Cleanup
* Scalable Express Architecture

---

# Future Improvements

* Playlist Management
* Search Functionality
* Music Recommendations
* Recently Played
* Song Likes
* User Profiles
* Friend Requests
* Push Notifications
* Lyrics Integration
* Collaborative Listening Rooms
* Progressive Web App (PWA)
* Mobile Application

---

# Troubleshooting

## MongoDB Connection

Verify:

* `MONGODB_URI`
* IP Whitelist
* Atlas Cluster Status

---

## Clerk Authentication

Verify:

* Publishable Key
* Secret Key
* Authorized Redirect URLs

---

## Cloudinary Uploads

Verify:

* Cloud Name
* API Key
* API Secret

---

## Socket.IO Issues

Check:

* Backend is running
* Same origin in production
* Correct WebSocket URL
* CORS configuration

---

# License

This project is licensed under the MIT License.

---

# Author

**Vamshi Kumar**

**GitHub**

https://github.com/thvvamshi

**LinkedIn**

https://www.linkedin.com/in/bodavamshikumar/

---

⭐ If you found this project helpful, consider giving it a star on GitHub.
