import mongoose from "mongoose";

const refreshTokenSchema = new mongoose.Schema(
  {
    userId: String,
    hashedToken: String,
  },
  {
    collection: "refresh-tokens",
    timestamps: true,
  }
);

const RefreshToken = mongoose.model("refreshToken", refreshTokenSchema);

export default RefreshToken;
