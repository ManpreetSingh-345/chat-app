import createUserService from "../services/userService.ts";
import createTokenService from "../services/tokenService.ts";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
import type { Request, Response } from "express";

const userService = createUserService();
const tokenService = createTokenService();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

if (!accessTokenSecret) {
  throw new Error("Access token secret not found in environment variable.");
}

if (!refreshTokenSecret) {
  throw new Error("Refresh token secret not found in environment variable.");
}

export const authenticateUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await userService.findUser(username, password);
    if (user) {
      const accessToken = jwt.sign(
        { id: user._id, role: user.role },
        accessTokenSecret,
        {
          expiresIn: "15m",
        },
      );
      const refreshToken = jwt.sign(
        { id: user._id, role: user.role },
        refreshTokenSecret,
        {
          expiresIn: "30m",
        },
      );
      await tokenService.persistToken(user._id.toString(), refreshToken);
      res.cookie("refresh-token", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });
      return res.status(200).send({
        message: "Logged in successfully",
        accessToken,
        refreshToken,
      });
    } else {
      return res.status(401).send({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "Server error encountered" });
  }
};

export const logoutUser = async (req: Request, res: Response) => {
  const refreshToken =
    req.cookies?.["refresh-token"] || req.headers.authorization?.split(" ")[1];

  res.clearCookie("refresh-token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  if (!refreshToken)
    return res.status(200).json({ message: "Logged out successfully" });

  try {
    await tokenService.deleteToken(refreshToken);

    return res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const refreshUserToken = async (req: Request, res: Response) => {
  const refreshToken = req.cookies["refresh-token"];

  if (!refreshToken) return res.sendStatus(401);

  try {
    let decoded;

    try {
      decoded = jwt.verify(refreshToken, refreshTokenSecret);
    } catch (err) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    if (typeof decoded === "string")
      return res.status(401).json({ message: "Invalid refresh token" });

    const payload = decoded as JwtPayload & { id: string; role: string };

    const foundToken = await tokenService.findToken(refreshToken);

    if (!foundToken)
      return res.status(401).json({ message: "Token not found in database" });

    const newAccessToken = jwt.sign(
      { id: payload.id, role: payload.role },
      accessTokenSecret,
      { expiresIn: "15m" },
    );
    return res.status(200).json({ newAccessToken });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
