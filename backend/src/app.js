import express from "express";
import { Server } from "socket.io";

const app = express();

app.get("/", (req, res) => {
  console.log("/ route reached");
  res.status(200).send({ message: "Successful API call" });
});

export default app;
