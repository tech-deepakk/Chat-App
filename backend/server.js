import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/authRoute.js";
import messageRouter from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);

app.get("/", (req, res) => {
  // this is the root
  res.send("Hello World");
});

async function connetDb() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("db connected");
  } catch (error) {}
}

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
  connetDb();
});
