import express from "express";
import {
  getAllOrder,
  getProductInsideOrder,
} from "../models/orders/order.model.js";
const router = express.Router();
import OrderSchema from "../models/orders/order.schema.js";

// GET MONTHLY INCOME

router.get("/income", async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  try {
    const monthInc = await OrderSchema.aggregate([
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

    monthInc.length
      ? res.send({
          status: "success",
          message: "Here is monthly income",
          monthInc,
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

// GET OVERALL INCOME

router.get("/overall", async (req, res) => {
  try {
    const overAll = await OrderSchema.aggregate([
      {
        $group: {
          _id: "$status",
          total: { $sum: "$amount" },
        },
      },
    ]);

    overAll.length
      ? res.send({
          status: "success",
          message: "Here is overall income",
          overAll,
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

// GET ALL ORDERS
router.get("/", async (req, res) => {
  try {
    const result = await getAllOrder();

    result
      ? res.send({
          status: "success",
          message: "Here are all the orders",
          result,
        })
      : res.send({
          status: "error",
          message: "Unable to get order , please try again later",
        });
  } catch (error) {
    res.send({
      status: "error",
      message: "Unable to get order , please try again later",
    });
  }
});

// FINDING MOST SOLD PRODUTCS
router.get("/prod-stats/:_id", async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  try {
    const { _id } = req.params;

    const order = await getAllOrder();

    // const prodCount = order.map((item) =>
    //   item.products.map((prod) => prod._id === _id)
    // );

    const prodCount = await order.count({ products });

    console.log(prodCount);

    // const prodStat = await order.aggregate([
    //   { $match: { createdAt: { $gte: prevMonth } } },
    //   {
    //     $project: {
    //       month: { $month: "$createdAt" },
    //       sales: "$amount",
    //     },
    //   },
    //   {
    //     $group: {
    //       _id: "$month",
    //       total: { $sum: "$sales" },
    //     },
    //   },
    // ]);

    // console.log(prodStat);

    // res.send({
    //   status: "success",
    //   message: "Product Stat",
    //   prodStat,
    // });
  } catch (error) {
    res.send({
      status: "error",
      message: "Unable to get order , please try again later",
    });
  }
});

// TOTAL AMOUNT OF MONEY SPENT BY EACH CUSTOMERS
router.get("/customer", async (req, res) => {
  try {
    const stats = await OrderSchema.aggregate([
      {
        $match: {},
      },

      { $group: { _id: "$email", total: { $sum: "$amount" } } },
    ]);

    stats.length
      ? res.send({
          status: "success",
          message: "Total money spent by each customer",
          stats,
        })
      : res.send({
          status: "success",
          message: "No purchase made yet",
        });
  } catch (error) {
    res.send({
      status: "error",
      message: "Unable to get order , please try again later",
    });
  }
});

export default router;
