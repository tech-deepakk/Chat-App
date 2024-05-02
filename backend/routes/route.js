import express, { Router } from "express";
import { signUp } from "../controller/auth.controller.js";
const router = express.Router();

router.post("/signup", signUp);
router.post("/logout", (req, res) => {
  res.send("this is a logout path");
});
router.post("/login", (req, res) => {
  res.send("this is a signup path");
});

export default router;
