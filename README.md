# 🎥 Video Conferencing Platform

A full-stack real-time video conferencing application that allows users to create and join meetings, communicate through audio and video calls, exchange messages, and share their screens.

The application provides user authentication, meeting management, real-time communication, and a responsive interface.

## 🚀 Features

- 🔐 User Registration and Login
- 📹 Create and Join Video Meetings
- 🎙️ Real-Time Audio and Video Communication
- 💬 Real-Time Chat Messaging
- 🖥️ Screen Sharing
- 🎤 Microphone Mute and Unmute
- 📷 Camera On and Off
- 📝 Meeting History
- 🛡️ Authentication and Protected Routes
- 📱 Responsive User Interface

## 🛠️ Technology Stack

### Frontend
- React.js
- React Router DOM
- Context API
- JavaScript
- HTML5
- CSS3

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Real-Time Communication
- Socket.IO
- WebRTC
- STUN Server

### Authentication and Security
- bcrypt
- Express Middleware
- CORS

### Development Tools
- Visual Studio Code
- Git and GitHub
- Postman
- npm

## 📂 Project Structure

```text
Video-Conferencing-Platform/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   │
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── contexts/
│   │   ├── pages/
│   │   │   ├── authentication.jsx
│   │   │   ├── history.jsx
│   │   │   ├── home.jsx
│   │   │   ├── landing.jsx
│   │   │   └── VideoMeet.jsx
│   │   │
│   │   ├── styles/
│   │   ├── utils/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── environment.js
│   │   ├── index.css
│   │   └── index.js
│   │
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

### 2. Navigate to the Project Folder

```bash
cd YOUR_REPOSITORY
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

## 🔑 Environment Configuration

Create a `.env` file inside the `backend` folder.

Add the following configuration:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB Atlas connection string.

**Important:** Never upload your `.env` file or database credentials to GitHub.

## ▶️ Running the Application

You need two separate terminals to run the frontend and backend.

### Start the Backend

```bash
cd backend
npm run dev
```

The backend server will run at:

```text
http://localhost:8000
```

### Start the Frontend

```bash
cd frontend
npm start
```

The frontend will normally run at:

```text
http://localhost:3000
```

If port 3000 is already occupied, React may use another available port, such as 3002.

## 🔄 Application Workflow

1. Users register or log in to the application.
2. Authenticated users access the meeting dashboard.
3. Users create or join video meetings.
4. Socket.IO manages real-time communication and signaling.
5. WebRTC enables peer-to-peer audio and video communication.
6. Participants can chat, share screens, and control their microphone and camera.
7. Meeting activity can be viewed through meeting history.

## 📸 Screenshots

You can add screenshots of your application in a `screenshots` folder.

Example:

```text
screenshots/
├── landing-page.png
├── login-page.png
├── register-page.png
├── home-page.png
├── video-meeting.png
└── meeting-history.png
```

To display a screenshot in this README:

```markdown
![Landing Page](screenshots/landing-page.png)
```

## 🎯 Learning Outcomes

- Understanding full-stack web application development.
- Working with React components and Context API.
- Building REST APIs using Node.js and Express.
- Connecting applications with MongoDB.
- Implementing real-time communication using Socket.IO.
- Understanding peer-to-peer communication with WebRTC.
- Managing user authentication and application state.
- Working with Git and GitHub.

## 🔮 Future Enhancements

- Meeting Recording
- Waiting Room
- File Sharing
- Virtual Backgrounds
- Live Captions
- Breakout Rooms
- Meeting Scheduling
- Email Invitations
- Push Notifications
- Admin Dashboard

---

**Developed as a Full-Stack Web Development Project.**