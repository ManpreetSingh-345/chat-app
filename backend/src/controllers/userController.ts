import createUserService from "../services/userService.ts";
import type { Request, Response } from "express";

export const registerUser = async (req: Request, res: Response) => {
  const userService = createUserService();
  console.log("Adding new user");
  const { username, password, email } = req.body;
  try {
    await userService.persistUser(username, password, email);
    console.log("User added successfully");
    res.status(201).send({ message: "New user added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server error encountered", err });
  }
};
