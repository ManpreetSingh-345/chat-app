import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export default connectDB;
