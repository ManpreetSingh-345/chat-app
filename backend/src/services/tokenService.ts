import RefreshToken from "../models/RefreshToken.ts";
import hashToken from "../utils/hashToken.ts";

export default function createTokenService() {
  return {
    findToken: async (token: string) => {
      const hashedToken = hashToken(token);

      const foundToken = await RefreshToken.findOne({ hashedToken });

      if (!foundToken) return null;
      return foundToken;
    },
    persistToken: async (userId: string, token: string) => {
      try {
        const hashedToken = hashToken(token);
        const newToken = new RefreshToken({
          userId,
          hashedToken,
        });
        await newToken.save();
      } catch (err) {
        throw new Error("Error saving token in the database.");
      }
    },
    deleteToken: async (token: string) => {
      try {
        const hashedToken = hashToken(token);
        const deletedUser = await RefreshToken.deleteOne({ hashedToken });
        console.log(deletedUser);
        if (!deletedUser) {
          return null;
        }
        return deletedUser;
      } catch (err) {
        throw new Error("Unable to delete token from database.");
      }
    },
  };
}
