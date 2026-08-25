import express from "express";
import {
  authenticateUser,
  logoutUser,
  refreshUserToken,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/login", authenticateUser);
router.post("/logout", logoutUser);
router.post("/refresh", refreshUserToken);

export default router;
