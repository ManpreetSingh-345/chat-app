import findUser from "../services/findUser.js";
import jwt from "jsonwebtoken";

export const authenticateUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await findUser(username, password);
    if (user) {
      res.cookie(
        "refresh-token",
        jwt.sign(
          { id: user.id, role: user.role },
          process.env.REFRESH_TOKEN_SECRET,
          {
            expiresIn: "30m",
          }
        ),
        { httpOnly: true, secure: true, sameSite: "lax" }
      );
      res.status(200).send({
        message: "Logged in successfully",
        accessToken: jwt.sign(
          { id: user.id, role: user.role },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "15m",
          }
        ),
      });
    } else {
      res.status(401).send({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server error encountered" });
  }
};

export const logoutUser = (req, res) => {};

export const refreshUserToken = (req, res) => {
  const refreshToken = req.cookies["refresh-token"];
  console.log(refreshToken);
  res.status(200).end();
};
