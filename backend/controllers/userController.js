import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

// @desc     Auth user and get token
// @route    POST /api/users/login
// @access   Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // checking to see if the password the user entered correlates with the one in the database with our method from userModel
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id), // generating a token alongside the user's id
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or password");
  }
});

// @desc     Register a new User
// @route    POST /api/users
// @access   Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // cheecking if the user already exists in the database
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  // if not we go ahead and create the new user
  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id), // generating a token alongside the user's id
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc     Get user profile
// @route    GET /api/users/profile
// @access   Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id); // req.user from our middleware "protect" in our userroutes

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

// @desc     Update user profile
// @route    PUT /api/users/profile
// @access   Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id); // req.user from our middleware "protect" in our userroutes

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

export { authUser, registerUser, getUserProfile, updateUserProfile };
