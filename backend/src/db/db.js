import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(process.env.DB_URI, {
      family: 4, // Forces IPv4 resolution
      serverSelectionTimeoutMS: 5000,
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export default connectDB;
