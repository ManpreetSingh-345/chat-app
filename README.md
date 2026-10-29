# Chatlify

Chatlify is a full-stack chat application for connecting users across language
barriers. The project is split into a React/Vite frontend and a TypeScript
backend that provides authentication, user registration, MongoDB persistence,
and Socket.IO connectivity.

## Project structure

```text
chat-app/
├── backend/   Express, MongoDB, authentication, and Socket.IO server
└── frontend/  React, TypeScript, Vite, and Tailwind CSS client
```

## Prerequisites

- Node.js and npm
- A MongoDB instance (local or hosted)

## Getting started

Install dependencies in each application:

```bash
cd backend
npm install

cd ../frontend
npm install
```

Create `backend/.env` with the values required by the server:

```dotenv
PORT=3000
DB_URI=mongodb://127.0.0.1:27017/chatlify
FRONTEND_URL=http://localhost:5173
ACCESS_TOKEN_SECRET=replace-with-a-long-random-secret
REFRESH_TOKEN_SECRET=replace-with-another-long-random-secret
NODE_ENV=development
```

`DB_URI`, `ACCESS_TOKEN_SECRET`, and `REFRESH_TOKEN_SECRET` are required.
`FRONTEND_URL` defaults to `http://localhost:5173`. The frontend currently
connects to the API at `http://localhost:3000`, so use port `3000` for the
backend during local development unless the frontend API client is updated.

Start the backend in one terminal:

```bash
cd backend
npm start
```

Start the frontend in another terminal:

```bash
cd frontend
npm run dev
```

Open the URL printed by Vite, normally
[http://localhost:5173](http://localhost:5173).

## Available scripts

### Backend

| Command | Description |
| --- | --- |
| `npm start` | Starts the TypeScript server with watch mode |

### Frontend

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run build` | Type-checks and builds the production frontend |
| `npm run lint` | Runs ESLint |
| `npm run preview` | Serves the production build locally |

## Backend API

The backend enables CORS with credentials and exposes these routes:

| Method | Route | Description |
| --- | --- | --- |
| `GET` | `/` | Health-check endpoint |
| `POST` | `/users/new` | Registers a new user |
| `GET` | `/users/protected` | Example authenticated route |
| `POST` | `/auth/login` | Authenticates a user |
| `POST` | `/auth/logout` | Logs out the current user |
| `POST` | `/auth/refresh` | Refreshes the access token |

Authentication uses access and refresh tokens. Cookies are configured for
credentialed requests, and protected routes use the authentication middleware.

## Frontend

The frontend currently includes:

- A landing page with the “Break the Language Barrier” message
- Login and signup pages
- Shared navigation and layout components
- Axios API client configured for credentialed requests
- React Router-based page routing

The backend also initializes a Socket.IO server. Clients can connect and emit
`send-message` events; the current server handler logs received messages and
connection lifecycle events.

## Development notes

- Run the frontend and backend in separate terminals.
- Keep secrets in `backend/.env`; do not commit that file.
- If the backend port or frontend origin changes, update the corresponding
  `PORT`, `FRONTEND_URL`, and frontend API client configuration.
