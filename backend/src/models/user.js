import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: String,
    hashedPassword: String,
    email: String,
    role: String,
  },
  {
    collections: "users",
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

export default User;
