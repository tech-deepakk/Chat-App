import express from "express";
import { login, signUp } from "../controller/auth.controller.js";
const router = express.Router();

router.post("/signup", signUp);
router.post("/logout", (req, res) => {
  res.send("this is a logout path");
});
router.post("/login", login);

export default router;
