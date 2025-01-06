import mongoose from "mongoose";
import { Config } from "../../config/index.js";

export const connectDb = async () => {
  try {
    await mongoose.connect(Config.MONGODB_URI);
    console.log("connected to DB...");
  } catch (error) {
    console.log(error.message);
  }
};
