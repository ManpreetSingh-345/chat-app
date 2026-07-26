import dotenv from "dotenv";
import express from "express";
import { Server } from "socket.io";
import { createServer } from "node:http";

dotenv.config();
const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

app.get("/", (req, res) => {
  console.log("/ route reached");
  res.status(200).send({ message: "Successful API call" });
});

io.on("connection", (socket) => {
  console.log("Client connected successfully");
});

server.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
