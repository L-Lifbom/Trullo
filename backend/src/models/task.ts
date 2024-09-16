import mongoose from "mongoose";
import database from "../config/database.js";

const { Schema, model } = mongoose;

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['to-do', 'in progress', 'blocked', 'done'], default: 'to-do' },
  assignedTo: { type: String },
  createdAt: { type: Date, default: () => new Date() },
  finishedBy: { type: Date, default: null },
});

const Task = model("Task", taskSchema);

export default Task;
