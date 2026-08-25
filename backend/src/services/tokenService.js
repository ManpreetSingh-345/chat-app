import RefreshToken from "../models/RefreshToken.js";
import argon2 from "argon2";

export default function tokenService() {
  return {
    findToken: async (userToken, userId) => {
      const token = await RefreshToken.findOne({ userId });

      if (!token) return res.status(401);
      if (await argon2.verify(token.hashedToken, userToken)) {
        return token.toObject();
      }
    },
    persistToken: async (userId, token) => {
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
    },
  };
}
