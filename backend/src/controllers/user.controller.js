import User from "../models/User.js";
import argon2 from "argon2";

export const addNewUser = async (req, res) => {
  console.log("Adding new user");
  const hashedPassword = await argon2.hash("StrongPass");
  try {
    const newUser = new User({
      username: "New user",
      hashedPassword,
      role: "user",
    });
    await newUser.save();
    console.log("New user added successfully");
    res.status(201).send({ message: "New user added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server error encountered", err });
  }
};

export const authenticateUser = async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = argon2.hash(password);

  try {
    if (
      (await User.findOne({ username })) &&
      argon2.verify(hashedPassword, password)
    ) {
      res.send({ message: "User found" });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server error encountered" });
  }
};
