import dotenv from "dotenv";
import { Server } from "socket.io";
import { createServer } from "node:http";
import app from "./src/app.js";
import { handleSocketConnection } from "./src/utils/socket.js";
import connectDB from "./src/db/db.js";

dotenv.config();
await connectDB();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
  },
});

io.on("connection", handleSocketConnection);

server.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
