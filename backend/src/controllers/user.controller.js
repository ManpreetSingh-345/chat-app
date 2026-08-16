import findUser from "../services/findUser.js";
import persistUser from "../services/persistUser.js";

export const addNewUser = async (req, res) => {
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

export const authenticateUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await findUser(username, password);
    if (user.username) {
      res.status(200).send({ message: "User found" });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server error encountered" });
  }
};
