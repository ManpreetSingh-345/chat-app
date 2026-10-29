import User from "../models/User.ts";
import argon2 from "argon2";

export default function createUserService() {
  return {
    findUser: async (username: string, password: string) => {
      const user = await User.findOne({ username }).catch(() =>
        Promise.reject("Error encountered finding user"),
      );

      if (!user) {
        throw new Error("User unable to be found");
      }

      if (user && (await argon2.verify(user.hashedPassword, password))) {
        return user.toObject();
      }
    },
    persistUser: async (username: string, password: string, email: string) => {
      try {
        const hashedPassword = await argon2.hash(password);
        const newUser = new User({
          username,
          hashedPassword,
          email,
          role: "user",
        });
        const savedUser = await newUser.save();
        return { id: savedUser };
      } catch (err) {
        console.log(err);
        throw new Error("Unable to save user to the database.");
      }
    },
  };
}
