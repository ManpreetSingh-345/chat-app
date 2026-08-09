import express from "express";
import { addNewUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/new", addNewUser);

export default router;
