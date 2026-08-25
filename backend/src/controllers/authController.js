import createUserService from "../services/userService.js";
import createTokenService from "../services/tokenService.js";
import jwt from "jsonwebtoken";

export const authenticateUser = async (req, res) => {
  const { username, password } = req.body;
  const userService = createUserService();
  const tokenService = createTokenService();

  try {
    const user = await userService.findUser(username, password);
    if (user) {
      const accessToken = jwt.sign(
        { id: user.id, role: user.role },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "15m",
        }
      );
      const refreshToken = jwt.sign(
        { id: user.id, role: user.role },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: "30m",
        }
      );
      await tokenService.persistToken(user._id, refreshToken);
      res.cookie("refresh-token", refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
      });
      res.status(200).send({
        message: "Logged in successfully",
        accessToken,
      });
    } else {
      res.status(401).send({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server error encountered" });
  }
};

export const logoutUser = (req, res) => {
  const token = req.cookies["refresh-token"];

  if (!token) return res.sendStatus(200);

  res.clearCookie("refresh-token");
};

export const refreshUserToken = async (req, res) => {
  const refreshToken = req.cookies["refresh-token"];

  if (!refreshToken) return res.sendStatus(401);

  try {
    let decoded;

    try {
      decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    } catch (err) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    const foundToken = await tokenService.findToken(refreshToken, decoded.id);

    if (!foundToken)
      return res.status(401).json({ message: "Token not found in database" });

    const newAccessToken = jwt.sign(
      { id: decoded.id, role: decoded.role },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    return res.status(200).json({ newAccessToken });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
