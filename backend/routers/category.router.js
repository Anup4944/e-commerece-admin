import express from "express";
import {
  addCategoryValidation,
  updateCategoryValidation,
} from "../middlewares/formValidation.middleware.js";
const router = express.Router();

import {
  createCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "../models/category/category.model.js";

// ADD CATEGORY
router.post("/", addCategoryValidation, async (req, res) => {
  try {
    const { newCategory, parentCategory } = req.body;

    const newCat = {
      newCategory,
      parentCategory,
    };

    const result = await createCategory(newCat);

    res.send({
      status: "successfull",
      message: "New Category saved",
      result,
    });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
});

// GET ALL CATEGORY
router.get("/", async (req, res) => {
  try {
    const allCategories = await getAllCategory();
    res.send({
      status: "success",
      message: "Here are all categories",
      allCategories,
    });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
});

// UPDATE CATEGORY
router.put("/", updateCategoryValidation, async (req, res) => {
  try {
    const result = await updateCategory(req.body);

    result?._id
      ? res.send({
          status: "success",
          message: "Category has been updated!",
          result,
        })
      : res.send({
          status: "error",
          message:
            "Error! Unable to update the category, Please try again later",
        });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
});

//DELETE CATEGORY
router.delete("/", async (req, res) => {
  try {
    const catArgs = req.body;
    const result = await deleteCategory(catArgs);

    if (result.deletedCount) {
      return res.send({
        status: "success",
        message: "Category and it's child categories has been deleted.",
        result,
      });
    }

    return res.send({
      status: "error",
      message: "Unable to delete the category",
      result,
    });
  } catch (error) {
    throw new Error(error.message);
  }
});

export default router;
