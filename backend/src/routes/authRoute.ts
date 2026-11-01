import express, { Router } from "express";
import {
  authenticateUser,
  logoutUser,
  refreshUserToken,
  getUserData,
} from "../controllers/authController.ts";
import verifyAuthUser from "../middleware/verifyAuthUser.ts";

const router: Router = express.Router();

router.post("/login", authenticateUser);
router.post("/logout", logoutUser);
router.get("/refresh", refreshUserToken);
router.get("/me", verifyAuthUser, getUserData);

export default router;
