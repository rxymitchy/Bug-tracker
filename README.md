# 🐞 MERN Bug Tracker

A full-stack **MERN** (MongoDB, Express, React, Node.js) application designed to help teams **report**, **track**, **update**, and **resolve bugs** across projects. The project integrates **testing and debugging best practices** to ensure application reliability and maintainability.

---

## 📌 Key Features

* ✅ **Report Bugs** – Users can submit new bugs through a form.
* 📋 **View Bugs** – See all reported bugs in a tabular or list format.
* 🔄 **Update Status** – Change the status of bugs (e.g., `Open`, `In Progress`, `Resolved`).
* ❌ **Delete Bugs** – Remove resolved or invalid issues.
* 🧪 **Testing** – Backend and frontend testing using industry-standard libraries.
* 🐞 **Debugging Tools** – Integrated debugging using DevTools, console logs, Node Inspector, and error boundaries.

---

## 📂 Tech Stack

* **Frontend**: React, Axios, React Testing Library, Tailwind CSS
* **Backend**: Node.js, Express, MongoDB, Mongoose, Jest, Supertest
* **Testing**: Jest, React Testing Library, Supertest
* **Debugging**: Chrome DevTools, Node.js Inspector, Error Boundaries

---

## 🛠️ Installation

### 1. Clone the repo

```bash
git clone https://github.com/rxymitchy/bug-tracker.git
cd bug-tracker
```

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Add your MongoDB URI in .env file
npm run dev
```

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

---

## 🧪 Testing Guide

### 🔙 Backend Tests

```bash
cd backend
npm test
```

Includes:

* Unit tests for helpers and validation logic
* Integration tests for API routes (Create, Read, Update, Delete)
* Mocking MongoDB using `jest-mock` or `mongodb-memory-server`

### 🔛 Frontend Tests

```bash
cd frontend
npm test
```

Includes:

* Unit tests for components (form handling, UI updates)
* Integration tests for user interactions and API calls

---

## 🐞 Debugging Techniques Used

* **Console Logging** for value tracing
* **Chrome DevTools** for React component inspection and network monitoring
* **Node.js Inspector** for debugging backend logic (`node --inspect server.js`)
* **React Error Boundaries** for graceful error handling on UI

---

## ⚠️ Error Handling

* Custom Express middleware for backend error responses
* Frontend error boundaries to prevent component crashes and display user-friendly messages

---

## 📈 Folder Structure Overview

```
bug-tracker/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── tests/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api/
│   │   └── App.jsx
└── README.md
```

---

## 📋 Future Improvements

* User authentication (Login/Signup)
* Role-based access control
* Real-time updates with WebSockets
* Bug categories and project filtering

---

## 👤 Author

Built by [**@rxymitchy**](https://github.com/rxymitchy)
Passionate about building reliable, tested, and scalable full-stack apps.

---
