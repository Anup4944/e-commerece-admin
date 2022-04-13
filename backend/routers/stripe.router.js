import express from "express";
const router = express.Router();
import stripePackage from "stripe";

const stripe = stripePackage(process.env.STRIPE_PRIVATE_KEY);

router.get("/", async (req, res) => {
  try {
    const transactions = await stripe.issuing.transactions.list({
      limit: 3,
    });

    console.log(transactions);

    res.send({
      status: "success",
      message: "Here are all payments",
      transactions,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

export default router;
