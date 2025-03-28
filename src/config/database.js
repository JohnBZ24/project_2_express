import mongoose from "mongoose";

const DB_HOST = "localhost";
const DB_PORT = 27017;
const DB_NAME = "projet_1";

const connectionString = `mongodb://${DB_HOST} :${DB_PORT}/${DB_NAME}`;
export const connect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/ayre3alam", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected succesfully.");
    })
    .catch((err) => console.error("MongoDB connection  error", err));
};
export default connect;
