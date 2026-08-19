import express from "express";
import {
  registerUser,
  authenticateUser,
} from "../controllers/user.controller.js";
import verifyAuthUser from "../middleware/verifyAuthUser.js";

const router = express.Router();

router.post("/new", registerUser);
router.post("/login", authenticateUser);
router.get("/protected", verifyAuthUser, (req, res) => {
  res.status(200).send({ message: "Protected route successfully accessed" });
});

export default router;
