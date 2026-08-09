import express from "express";
import userRouter from "./routes/userRoute.js";

const app = express();

app.use("/users", userRouter);
app.get("/", (req, res) => {
  console.log("/ route reached");
  res.status(200).send({ message: "Successful API call" });
});

export default app;
