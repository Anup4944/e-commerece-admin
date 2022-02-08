import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

import mongoose from "mongoose";
import multer from "multer";

const PORT = 5000;

//midddleware
app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());

//database connection
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(console.log("Database connection successful"))
  .catch((err) => console.log(err));

//Routers

import userRouter from "./routers/user.router.js";
import authRouter from "./routers/auth.js";

// Use API
app.use("/api/v1/user", userRouter);
app.use("/api/v1/auth", authRouter);

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
