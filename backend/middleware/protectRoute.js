import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unautherized - No Token Available" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Unautherized - Invalid Token" });
    }

    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ error: "User Not Found" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("error in protectRoute", error.message);
    res.status(500).json({ error: "Internal Server error" });
  }
};

export default protectRoute;
