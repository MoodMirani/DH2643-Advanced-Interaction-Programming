import Mongoose from "mongoose";
import config from "./config/config";

const connectDB = async () => {
  const localDB = `${config.db_url}/${config.db_name}`;
  await Mongoose.connect(localDB); //How to handle connection error here? TODO
  console.log("Connected to DB.");
};

export default connectDB;
