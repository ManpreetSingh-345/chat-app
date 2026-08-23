import findUser from "../services/findUser.js";

export const authenticateUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await findUser(username, password);
    if (user.username) {
      res.status(200).send({ message: "User found", user });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server error encountered" });
  }
};
