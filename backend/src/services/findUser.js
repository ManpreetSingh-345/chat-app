import User from "../models/User.js";
import argon2 from "argon2";

const findUser = async (username, password) => {
  const user = await User.findOne({ username });
  if (user && (await argon2.verify(user.hashedPassword, password))) {
    return {
      message: "User found",
      username,
      password,
    };
  } else {
    return {
      message: "User not found",
    };
  }
};

export default findUser;
