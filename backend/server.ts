import { Server } from "socket.io";
import { createServer } from "node:http";
import app, { frontendOrigin } from "./src/app.js";
import { handleSocketConnection } from "./src/utils/handleSocketConnection.ts";
import connectDB from "./src/db/db.ts";

process.on("uncaughtException", (err) => {
  console.log("Uncaught error encountered: ", err);
  process.exit(1);
});

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: frontendOrigin,
    credentials: true,
  },
});

io.on("connection", handleSocketConnection);

connectDB()
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log(`App listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(
      "Error encountered during database connection. Error details: \n",
      err,
    );
  });
