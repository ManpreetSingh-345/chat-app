import RefreshToken from "../models/RefreshToken.js";
import jwt from "jsonwebtoken";
import argon2 from "argon2";

export const findToken = async (userToken, userId) => {
  const token = await RefreshToken.findOne({ userId });

  if (!token) return res.status(401);
  if (await argon2.verify(token.hashedToken, userToken)) {
    const newAccessToken = jwt.sign(
      { userId },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    return res.status(201).json({ newAccessToken });
  }
};
