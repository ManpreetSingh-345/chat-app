import mongoose from "mongoose";

const connectDB = async () => {
  const dbUri = process.env.DB_URI;

  if (!dbUri) {
    throw new Error("DB_URI environment variable is not set");
  }

  await mongoose
    .connect(dbUri, {
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
