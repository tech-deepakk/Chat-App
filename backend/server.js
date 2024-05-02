import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/route.js";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use("/api/auth", authRouter);

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
