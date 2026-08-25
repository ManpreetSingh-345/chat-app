import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
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
