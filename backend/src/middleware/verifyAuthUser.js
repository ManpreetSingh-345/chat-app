import jwt from "jsonwebtoken";

const verifyAuthUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res
        .status(401)
        .json({ message: "User not authorized to access resources" });
    }

    req.user = decoded.username;

    next();
  });
};

export default verifyAuthUser;
