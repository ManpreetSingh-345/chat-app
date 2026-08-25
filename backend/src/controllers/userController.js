import createUserService from "../services/userService.js";

export const registerUser = async (req, res) => {
  const userService = createUserService();
  console.log("Adding new user");
  const { username, password } = req.body;
  try {
    await userService.persistUser(username, password);
    res.status(201).send({ message: "New user added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Server error encountered", err });
  }
};
