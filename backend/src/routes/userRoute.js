import express from "express";
import {
  addNewUser,
  authenticateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/new", addNewUser);
router.post("/login", authenticateUser);

export default router;
