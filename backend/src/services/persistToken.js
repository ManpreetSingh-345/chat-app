import RefreshToken from "../models/RefreshToken.js";
import argon2 from "argon2";

const persistToken = async (userId, token) => {
  try {
    const hashedToken = await argon2.hash(token);
    const newToken = new RefreshToken({
      userId,
      hashedToken,
    });
    await newToken.save();
  } catch (err) {
    return Promise.reject(err);
  }
};

export default persistToken;
