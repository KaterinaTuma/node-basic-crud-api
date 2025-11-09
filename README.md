# CRUD API

Simple CRUD API built with **Node.js** and in-memory database.

## ⚙️ Environment

Create `.env` file based on `.env.example`:

```
HOST=localhost
PORT=4000
```

## 🧩 Scripts

```bash
# Development run
npm run start:dev

# Production run
npm run start:prod
```

## 🚀 Features

* RESTful endpoints for `/api/users`
* Full CRUD operations:

  * `GET /api/users` — get all users
  * `GET /api/users/:userId` — get user by ID
  * `POST /api/users` — create user
  * `PUT /api/users/:userId` — update user
  * `DELETE /api/users/:userId` — delete user
* Validation of request body and UUIDs
* Proper error handling (`400`, `404`, `500`)
* Environment configuration via `.env`
* ⭕️ Optional clustering mode with load balancer is not implemented!

## 🧪 Test scenarios

Note: Before running API tests, make sure the server is running (npm run start:prod).

1. `GET /api/users` — returns empty array
2. `POST /api/users` — creates a user
3. `GET /api/users/:id` — returns created user
4. `PUT /api/users/:id` — updates user
5. `DELETE /api/users/:id` — deletes user

---
