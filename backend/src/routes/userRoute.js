import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("User Route reached");
  res.status(200).send({ message: "User route reached" });
});

export default router;
