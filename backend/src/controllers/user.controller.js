import User from "../models/user.js";

export const addNewUser = async (req, res) => {
  console.log("Adding new user");
  try {
    const newUser = new User({
      username: "New user",
      password: "password",
    });
    await newUser.save();
    console.log("New user added successfully");
    res.status(200).send({ message: "New user added successfully" });
  } catch (err) {
    res.status(500).send({ message: "Server error encountered", err });
  }
};
