import express from "express";
import { hashPassword } from "../helpers/bcrypt.helper.js";
import {
  createUser,
  getUserByEmail,
  getUsers,
} from "../models/user/user.model.js";
const router = express.Router();

// REGISTER USER / ADMIN
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const hashPass = await hashPassword(password);

    const newUser = { firstName, lastName, email, password: hashPass };

    const result = await createUser(newUser);

    if (result?._id) {
      return res.json({
        status: "success",
        message: "Registration Success!!!!",
        result,
      });
    }

    res.json({ status: "error", message: "Invalid login details" });
  } catch (error) {
    if (error.message.includes("duplicate key error collection")) {
      return res.json({ status: "error", message: "This email already exist" });
    }

    throw new Error(error.message);
  }
});

// GET ALL USERS
router.get("/all", async (req, res) => {
  try {
    const allUsers = await getUsers();

    res.send({
      status: "success",
      message: "All users",
      allUsers,
    });
  } catch (error) {
    res.send({
      status: "error",
      message: "Invalid request",
    });
  }
});

// GET USER BY EMAIL
router.get("/byemail", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await getUserByEmail(email);

    if (user?._id) {
      res.send({
        status: "success",
        user,
      });
    }
  } catch (error) {
    res.send({
      status: "error",
      message: "Invalid request",
    });
  }
});

export default router;
