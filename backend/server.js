import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js"
import { errorHandler } from "./middlewares/errorHandler.js";
import cors from "cors";

dotenv.config();
connectDB();
// db

app.use(cors({
  origin: 'https://rennj.netlify.app'
}));

const app = express();
app.use(express.json());
app.use(cookieParser());
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Realestate");
});

app.use("/api/users",userRoutes);

app.use(errorHandler);




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});          
