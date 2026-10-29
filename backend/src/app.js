import "dotenv/config";
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";

const app = express();
const frontendOrigin = process.env.FRONTEND_URL ?? "http://localhost:5173";

// Middleware
app.use(
  cors({
    origin: frontendOrigin,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/users", userRouter);
app.use("/auth", authRouter);

// Test route
app.get("/", (req, res) => {
  console.log("/ route reached");
  res.status(200).send({ message: "Successful API call" });
});

export default app;
export { frontendOrigin };
