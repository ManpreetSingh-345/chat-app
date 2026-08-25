import persistUser from "../services/persistUser.js";
import persistToken from "../services/persistToken.js";

export const registerUser = async (req, res) => {
  console.log("Adding new user");
  const { username, password } = req.body;
  try {
    await persistUser(username, password);
    res.status(201).send({ message: "New user added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server error encountered", err });
  }
};
