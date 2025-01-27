import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
// db

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Realestate");
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});          
