import express from "express";
import { registerUser } from "../controllers/userController.ts";
import verifyAuthUser from "../middleware/verifyAuthUser.ts";

const router = express.Router();

router.post("/new", registerUser);
router.get("/protected", verifyAuthUser, (req, res) => {
  res.status(200).send({ message: "Protected route successfully accessed" });
});

export default router;
