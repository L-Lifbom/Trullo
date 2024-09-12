import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;

if (!user || !password || !host) {
    console.error("Missing database environment variables.");
    process.exit(1);
}

const dbURI = `mongodb+srv://${user}:${password}@${host}/graphql?retryWrites=true&w=majority`;

mongoose.connect(dbURI)
    .then(() => console.log("Connected to database"))
    .catch((error: Error) => console.error("An error occurred: ", error.message));

const database = mongoose.connection;

export default database;