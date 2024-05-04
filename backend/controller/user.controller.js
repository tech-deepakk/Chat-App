import User from "../model/user.model.js";

export const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUser = req.user._id;
    const filteredUser = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    );
    res.status(200).json(filteredUser);
  } catch (error) {
    console.log("error in get user controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
