import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/route.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  // this is the root
  res.send("Hello World");
});

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
