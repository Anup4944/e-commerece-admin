import express from "express";
import { getAllClient, getClientById } from "../models/client/client.model.js";
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

// GET CLIENT BY ID
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
      message: "Invalid request",
    });
  }
});

export default router;
