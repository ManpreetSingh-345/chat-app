import User from "../models/User.js";
import argon2 from "argon2";

const persistUser = async (username, password) => {
  try {
    const hashedPassword = await argon2.hash(password);
    const newUser = new User({
      username,
      hashedPassword,
      role: "user",
    });
    await newUser.save();
    console.log("New user added successfully");
  } catch (err) {
    return Promise.reject(err);
  }
};

export default persistUser;
