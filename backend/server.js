import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";

dotenv.config({});

connectDB();


const app = express();

// app.use((req, res, next) => {
//   console.log(req.originalUrl);
//   next()
// })

app.get("/", (req, res) => {
  res.send("Yeahhhhhhhh");
});

app.use("/api/products", productRoutes) 

// middleware for error Handling
app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server runing in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
);