import express from "express";
import { hashPassword } from "../helpers/bcrypt.helper.js";
import {
  getAllClient,
  getClientById,
  updateClientPass,
} from "../models/client/client.model.js";
import ClientSchema from "../models/client/client.schema.js";
const router = express.Router();

// GET ALL CLIENTS
router.get("/", async (req, res) => {
  try {
    const allUsers = await getAllClient();

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

// GET USER STATS
router.get("/clientInfo", async (req, res) => {
  try {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    const clientStats = await ClientSchema.aggregate([
      {
        $match: { createdAt: { $gte: lastYear } },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.send({
      status: "success",
      message:
        "Here is user stats, _id = month number and total = number of user registered that month",
      clientStats,
    });
  } catch (error) {
    res.send({
      status: "error",
      message: "Invalid request",
    });
  }
});

//GET CLIENT BY ID
router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const singleUser = await getClientById(_id);

    singleUser._id
      ? res.send({
          status: "success",
          message: "Here is single user",
          singleUser,
        })
      : res.send({
          status: "error",
          message: "No user found",
        });
  } catch (error) {
    res.send({
      status: "error",
      message: "Invalid request!!!",
    });
  }
});

//UPDATE CLIENT PASSWORD VIA ADMIN PAGE
router.patch("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const { password } = req.body;

    const { newPass } = password;

    const hashPass = await hashPassword(newPass);

    const user = await getClientById(_id);

    if (!user._id) {
      return res.send({
        status: "error",
        message: "No user found",
      });
    }

    const result = await updateClientPass({ _id, hashPass });

    console.log(result);

    result._id
      ? res.send({
          status: "success",
          message: `Password updated for ${user.email}`,
        })
      : res.send({
          status: "error",
          message: "No available right now",
        });
  } catch (error) {
    res.send({
      status: "error",
      message:
        "Error! There is some problem in our system, please try again later.",
    });
  }
});

export default router;
