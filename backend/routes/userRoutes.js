import express, { Router } from "express";
const router = express.Router();
import { authUser, getUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/login").post(authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
