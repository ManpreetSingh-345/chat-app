import User from "../models/User.js";

export const userRepository = {
  findByUsername: (username) => User.findOne({ username }).exec(),
};
