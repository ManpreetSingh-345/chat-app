import express from "express";
import {
  addNewUser,
  authenticateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/new", addNewUser);
router.post("/login", authenticateUser);

export default router;
