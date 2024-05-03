import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndCookie from "../utils/generateToken.js";

export const signUp = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(404).json({ error: "Password doesn't match" });
    }
    const user = await User.findOne({ userName });

    if (user) {
      return res.status(404).json({ error: "User already exists" });
    }

    // hash code here
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    //profile pic
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName,
      userName,
      password: hashPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (newUser) {
      // generate jwtwebtoken here
      generateTokenAndCookie(newUser._id, res);

      await newUser.save();
      res.status(201).json({
        id: newUser._id,
        fullName: newUser.fullName,
        userName: newUser.userName,
        profilePic: newUser.profilePic,
      });
    }
  } catch (error) {
    console.error("error in signup controller ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(404).json({ error: "Invalid username or password" });
    }

    generateTokenAndCookie(user._id, res);

    res.status(201).json({
      id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.error("error in login controller ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logOut = (req, res) => {
  res.send("this is a logout path");
};
