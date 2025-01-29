import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isMaintananceStaff: user.isMaintananceStaff,
      isOwner: user.isOwner,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Data");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isMaintananceStaff: user.isMaintananceStaff,
      isOwner: user.isOwner,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

export { signup, authUser };
