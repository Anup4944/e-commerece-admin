import express from "express";
import { getAllClient } from "../models/client/client.model.js";
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

export default router;
