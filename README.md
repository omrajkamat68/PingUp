# 🔗 PingUp – Social Media Platform

[![MERN](https://img.shields.io/badge/MERN-Full%20Stack-brightgreen?style=for-the-badge\&logo=mongodb)]() [![React](https://img.shields.io/badge/Frontend-React%20+%20Vite-blue?style=for-the-badge\&logo=react)]() [![Express.js](https://img.shields.io/badge/Backend-Express.js-lightgrey?style=for-the-badge\&logo=express)]() [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)]()

**PingUp** is a modern, feature-rich **MERN stack** social media application that allows users to connect, share posts, create stories, message friends, and discover new people — all in one beautifully designed platform. With real-time updates, automated reminders, and a clean user interface, PingUp makes staying connected seamless and engaging.

---

## 🚀 Live Demo

🌐 Explore the deployed app:
🔗 **(https://pingup-client-seven.vercel.app/)**

---

## ✨ Key Features

### 👤 User Experience

* 🔐 **Secure Authentication** — Sign up / login / logout with [Clerk](https://clerk.dev/)
* ⚡ **Real-Time User Sync** — Automatic create / update / delete using **Inngest**
* 📰 **Feed** — View posts from users you follow & create posts with text and **image attachments**
* 📷 **Stories** — Share photos, videos (up to 50 MB), or text stories that auto-delete after 24 hours
* 💬 **Messaging** — Real-time chat with your connections & daily email reminders for unseen messages
* 🤝 **Connections** — Manage followers, following, pending requests & get instant email notifications
* 🔍 **Discover** — Search other users by username, email, name, or location

---

## 🧪 Tech Stack

| Technology           | Description                                 |
| -------------------- | ------------------------------------------- |
| 🟢 **MongoDB Atlas** | NoSQL Database                              |
| ⚙️ **Express.js**    | Backend Framework                           |
| ⚛️ **React + Vite**  | Frontend SPA Framework                      |
| 🕢 **Node.js**       | JavaScript Runtime                          |
| 🎨 **Tailwind CSS**  | Utility-first CSS Framework                 |
| 🧾 **Clerk**         | Authentication & User Management            |
| ✉️ **Nodemailer**    | Email Delivery & Notifications (Brevo SMTP) |
| 🧠 **Inngest**       | Background Jobs & Scheduling                |
| 🖼️ **ImageKit**     | Image Management & Optimization             |
| 🌐 **Vercel**        | Frontend & Backend Deployment                         |

---

## 🔐 Environment Variables

### 🌐 Server (`server/.env`)

```bash
# Frontend URL
FRONTEND_URL=http://localhost:5173

# MongoDB
MONGODB_URL=mongodb+srv://<your_mongo_user>:<your_mongo_pass>@cluster0.usrqouc.mongodb.net

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

# Clerk
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# ImageKit
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_imagekit_id

# SMTP (Brevo)
SENDER_EMAIL=your_email@gmail.com
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```

### 💻 Client (`client/.env`)

```bash
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BASEURL=http://localhost:4000
```

---

## 🧾 Local Setup

1️⃣ **Clone the Repository**

```bash
git clone https://github.com/omrajkamat68/PingUp.git
cd PingUp
```

2️⃣ **Install Dependencies**

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

3️⃣ **Add Environment Variables**
Create `.env` files inside both `server/` and `client/` with the values listed above.

4️⃣ **Run the Application**

```bash
# Start Backend
cd server
npm run server

# Start Frontend
cd ../client
npm run dev
```

Your app will be running at 👉 **[http://localhost:5173](http://localhost:5173)**

---

## ✉️ Email & Automation

* 📩 **Connection Requests** — Instant emails for new requests & reminders if pending
* 🕒 **Auto Story Deletion** — Stories removed after 24 hours automatically
* 📬 **Unseen Messages Notification** — Daily email digest of unread messages
* ⚡ **Event-Driven Workflows** — Powered by Inngest

---

## 🧠 Core Highlights

* ⚡ Real-Time User Sync with Clerk
* 📨 Smart Email Notifications
* 🕒 Scheduled Jobs for clean-up & reminders
* 🛡️ Secure Authentication & Roles

---

## 🌟 Future Enhancements

* 📱 Enhanced mobile responsiveness
* 🌎 User location-based suggestions & connections
* 🔔 Push notifications for new messages & requests
* 🧵 Threads & post comments for deeper engagement

---

## 🙏 Acknowledgements

* 🔐 [Clerk](https://clerk.dev/) — Authentication
* 🧠 [Inngest](https://inngest.com/) — Background Jobs
* ✉️ [Brevo](https://www.brevo.com/) — Email Services
* 🖼️ [ImageKit](https://imagekit.io/) — Image Management
