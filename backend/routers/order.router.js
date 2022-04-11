import express from "express";
const router = express.Router();
import OrderSchema from "../models/orders/order.schema.js";

// GET MONTHLY INCOME

router.get("/income", async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  try {
    const income = await OrderSchema.aggregate([
      { $match: { createdAt: { $gte: prevMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);

    income.length
      ? res.send({
          status: "success",
          message: "Here is monthly income",
          income,
        })
      : res.send({
          status: "error",
          message: "No income found",
        });
  } catch (error) {
    res.send({
      status: "error",
      message: "Unable to get order , please try again later",
    });
  }
});

// GET MONTHLY INCOME

router.get("/overall", async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  try {
    const income = await OrderSchema.aggregate([
      {
        $group: {
          _id: "$status",
          total: { $sum: "$amount" },
        },
      },
    ]);

    income.length
      ? res.send({
          status: "success",
          message: "Here is monthly income",
          income,
        })
      : res.send({
          status: "error",
          message: "No income found",
        });
  } catch (error) {
    res.send({
      status: "error",
      message: "Unable to get order , please try again later",
    });
  }
});

export default router;
