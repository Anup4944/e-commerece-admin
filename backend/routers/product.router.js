import express from "express";
import slugify from "slugify";
import { newProductValidation } from "../middlewares/formValidation.middleware.js";
import {
  getAllProducts,
  getProductById,
  insertProduct,
  updateProductById,
} from "../models/product/product.model.js";
const router = express.Router();

router.post("/", newProductValidation, async (req, res) => {
  try {
    const newProd = {
      ...req.body,
      date: new Date(req.body.saleEndDate),
      slug: slugify(req.body),
    };

    console.log(newProd);

    const result = await insertProduct(...newProd);

    if (result?._id) {
      return res.send({
        status: "success",
        message: "The product has been added!",
        result,
      });
    }

    res.json({
      status: "error",
      message: "Unable to add the product, Please try again later",
    });
  } catch (error) {
    throw error;
  }
});

router.get("/:_id?", async (req, res) => {
  const { _id } = req.params;
  try {
    const result = _id ? await getProductById(_id) : await getAllProducts();

    res.json({
      status: "success",
      message: "Here are the products",
      result,
    });
  } catch (error) {
    throw error;
  }
});

router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const { ...newProduct } = req.body;

    console.log(newProduct);

    const prod = await getProductById(_id);

    if (!prod?._id) {
      return res.send({
        status: "error",
        message: "No product found",
      });
    }

    const updatedProduct = await updateProductById({ _id, newProduct });

    res.status(200).send({
      status: "success",
      message: "Your post has been updated",
      updatedProduct,
    });
  } catch (error) {
    res.send({
      status: "error",
      message: "Unable please try again later",
    });
  }
});

router.delete("/", async (req, res) => {
  try {
    if (!req.body) {
      return res.json({
        status: "error",
        message: "Unable to add the product, Please try again later",
      });
    }

    const result = await deleteProduct(req.body);
    console.log(result);

    if (result?._id) {
      return res.json({
        status: "success",
        message: "The product has been deleted.",
        result,
      });
    }

    res.json({
      status: "error",
      message: "Unable to delete the product, Please try again later",
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export default router;
