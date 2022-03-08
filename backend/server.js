import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

import mongoose from "mongoose";
import path from "path";

const PORT = 5000;

//midddleware
app.use(cors());
app.use(morgan("tiny"));

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
//database connection
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(console.log("Database connection successful"))
  .catch((err) => console.log(err));

//Routers

import userRouter from "./routers/user.router.js";
import authRouter from "./routers/auth.js";
import productRouter from "./routers/product.router.js";
import categoryRouter from "./routers/category.router.js";
import clientRouter from "./routers/client.router.js";

// Use API
app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/client", clientRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

//404 return

app.use((req, res, next) => {
  const error = new Error("Resources not found");
  error.status = 404;

  next(error);
});

//handle error
import { handleError } from "./utils/errorHandler.js";
app.use((error, req, res, next) => {
  handleError(error, res);
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Backend server is running at http://localhost:${PORT}`);
});
