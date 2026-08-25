import User from "../models/User.js";
import argon2 from "argon2";

export default function createUserService() {
  return {
    findUser: async (username, password) => {
      const user = await User.findOne({ username }).catch(() =>
        Promise.reject("Error encountered finding user")
      );
      if (user && (await argon2.verify(user.hashedPassword, password))) {
        return user.toObject();
      }
    },
    persistUser: async (username, password) => {
      try {
        const hashedPassword = await argon2.hash(password);
        const newUser = new User({
          username,
          hashedPassword,
          role: "user",
        });
        const savedUser = await newUser.save();
        return { id: savedUser };
      } catch (err) {
        throw new Error(err);
      }
    },
  };
}
