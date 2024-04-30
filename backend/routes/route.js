import express, { Router } from "express";
const router = express.Router();

router.post("/login", (req, res) => {
  res.send("this is a login path");
});
router.post("/logout", (req, res) => {
  res.send("this is a logout path");
});
router.post("/signup", (req, res) => {
  res.send("this is a signup path");
});

export default router;
