# Table Reservation Lock API

This project provides a simple in-memory locking mechanism for table reservations using Node.js and Express.

## Features

- Lock a table temporarily for a user
- Unlock a table only by the same user
- Check lock status of a table

## Tech Stack

- Node.js
- Express.js

## API Endpoints

### 1. Lock a Table

**POST** `/api/tables/lock`

```json
{
  "tableId": "table-123",
  "userId": "user-abc",
  "duration": 600
}
```

### 2. Unlock a Table

**POST** `/api/tables/unlock`

```json
{
  "tableId": "table-123",
  "userId": "user-abc"
}
```

### 3. Check Table Lock Status

**GET** `/api/tables/table-123/status`

**Response**

```json
{
  "isLocked": true
}
```

## Run the Project

```bash
npm install
npm start
```