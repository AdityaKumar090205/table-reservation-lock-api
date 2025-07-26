# table-reservation-lock-api
A lightweight Node.js API to lock, unlock, and check table reservations using in-memory storage to prevent double bookings.
# 🪑 Table Reservation Lock API

A lightweight Node.js/Express API that handles **temporary table reservations** using an in-memory locking mechanism — perfect for preventing double-bookings in real-time environments.

## 🚀 Features

- 🔒 Lock a table for a specific user for a specified duration
- 🔓 Unlock a table (only by the user who locked it)
- 📡 Check real-time table lock status
- 🧠 Uses simple in-memory storage — no database setup needed

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- In-memory JavaScript object (for lock storage)

---

## 📦 Installation & Run

```bash
git clone https://github.com/your-username/table-reservation-lock-api.git
cd table-reservation-lock-api
npm install
npm start
