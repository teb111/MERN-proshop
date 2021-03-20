import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

// once the slash ("/") route is entered we are sending a get request for getproducts
router.route("/").get(getProducts);

router.route("/:id").get(getProductById);

export default router;
