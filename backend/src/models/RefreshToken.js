import mongoose from "mongoose";

const refreshTokenSchema = new mongoose.Schema(
  {
    userId: String,
    hashedToken: String,
  },
  {
    timestamps: true,
  }
);

const RefreshToken = mongoose.model("refreshToken", refreshTokenSchema);

export default RefreshToken;
