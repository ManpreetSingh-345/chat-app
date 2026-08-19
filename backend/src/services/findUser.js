import User from "../models/User.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

const findUser = async (username, password) => {
  const user = await User.findOne({ username }).catch(() =>
    Promise.reject("Error encountered finding user")
  );
  if (user && (await argon2.verify(user.hashedPassword, password))) {
    return {
      message: "User found",
      username,
      accessToken: jwt.sign(
        { username, password },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "5m",
        }
      ),
    };
  }
  return {
    message: "User not found",
  };
};

export default findUser;
