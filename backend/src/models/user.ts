import mongoose from "mongoose";
import database from "../config/database.js";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = model("User", userSchema);

export default User;
