import express from "express";

const app = express();
app.get("/", (req, res) => {
  console.log("/ route reached");
  res.status(200).send({ message: "Successful API call" });
});

app.listen(8000, () => {
  console.log("App listening on port 8000");
});
