import User from "../models/User.js";
import argon2 from "argon2";

const findUser = async (username, password) => {
  const user = await User.findOne({ username }).catch(() =>
    Promise.reject("Error encountered finding user")
  );
  if (user && (await argon2.verify(user.hashedPassword, password))) {
    return user.toObject();
  }
};

export default findUser;
