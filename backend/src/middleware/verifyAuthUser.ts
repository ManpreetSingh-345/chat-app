import jwt, { type JwtPayload } from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

declare global {
  namespace Express {
    interface Request {
      user?: string;
    }
  }
}

const verifyAuthUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    throw new Error("Token not found in authorization headers");
  }

  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

  if (!accessTokenSecret) {
    throw new Error("Access token secret not found in environment file.");
  }

  jwt.verify(token, accessTokenSecret, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ message: "User not authorized to access resources" });
    }

    const payload = decoded as JwtPayload & { username: string };

    req.user = payload.username;

    next();
  });
};

export default verifyAuthUser;
