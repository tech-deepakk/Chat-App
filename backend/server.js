const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  // this is the root
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`server started at ${PORT}`);
});
