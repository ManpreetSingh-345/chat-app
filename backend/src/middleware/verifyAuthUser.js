import jwt from "jsonwebtoken";

const verifyAuthUser = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  } catch (err) {
    console.log("JSON web token error encountered. Details: ", err);
    res.status(401).send({
      message: "User is unauthorized to access requested resources",
    });
    process.exit(1);
  }

  req.token = token; // Attach token to req object for downstream routes to use

  next();
};

export default verifyAuthUser;
