import RefreshToken from "../models/RefreshToken.js";
import hashToken from "../utils/hashToken.js";

export default function createTokenService() {
  return {
    findToken: async (token) => {
      const hashedToken = hashToken(token);
      const foundToken = await RefreshToken.findOne({ hashedToken });

      if (!foundToken) return null;
      return foundToken;
    },
    persistToken: async (userId, token) => {
      try {
        const hashedToken = hashToken(token);
        const newToken = new RefreshToken({
          userId,
          hashedToken,
        });
        await newToken.save();
      } catch (err) {
        throw new Error(err);
      }
    },
    deleteToken: async (token) => {
      try {
        const hashedToken = hashToken(token);
        const deletedUser = await RefreshToken.deleteOne({ hashedToken });
        console.log(deletedUser);
        if (!deletedUser) {
          return null;
        }
        return deletedUser;
      } catch (err) {
        throw new Error(err);
      }
    },
  };
}
