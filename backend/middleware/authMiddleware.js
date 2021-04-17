import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler"; // to handle any unHandled promise rejection warnings
import User from "../models/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Grabbing only our token here alone and leaving the "Bearer"

      const decoded = jwt.verify(token, process.env.JWT_SECRET); // and verifying it with our secret JWT and we are getting something like
      // { id: '601f29cd01dda224a093s7as07', iat: 1616244679, exp: 1618836679 }

      req.user = await User.findById(decoded.id).select("-password"); // getting the user from the database but excluding the user's password

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error("Not Authorized, Not an Admin");
  }
};

export { protect, admin };
