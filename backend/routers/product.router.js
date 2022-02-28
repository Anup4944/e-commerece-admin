import express from "express";
import {
  newProductValidation,
  updateProductValidation,
} from "../middlewares/formValidation.middleware.js";
import {
  deleteProductById,
  getAllProducts,
  getProductById,
  insertProduct,
  updateProductById,
} from "../models/product/product.model.js";
const router = express.Router();
import multer from "multer";
import slugify from "slugify";
// Multer configuration

const ALLOW_FILE_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let err = null;

    const isAllowed = ALLOW_FILE_TYPE[file.mimetype];

    if (!isAllowed) {
      err = new Error(
        "Some of the file types are not allowed, Only images are allowed"
      );

      err.status = 400;
    }

    cb(err, "public/product-images");
  },
  filename: function (req, file, cb) {
    const fileName = slugify(file.originalname.split(".")[0]);

    const extension = ALLOW_FILE_TYPE[file.mimetype];

    const fullFileName = fileName + "-" + Date.now() + "." + extension;
    cb(null, fullFileName);
  },
});

const upload = multer({ storage: storage });

// ADD PRODUCT
router.post(
  "/",
  upload.array("images", 5),
  newProductValidation,
  async (req, res) => {
    console.log(req.body);
    try {
      const newProd = {
        ...req.body,
        date: new Date(req.body.saleEndDate),
      };

      const result = await insertProduct(newProd);

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
      console.log(error);
      res.send({
        status: "error",
        message: error.message,
      });
    }
  }
);

// GET PRODUCT BY ID
router.get("/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const singleProduct = await getProductById(_id);

    singleProduct
      ? res.json({
          status: "success",
          message: "Here is single products",
          singleProduct,
        })
      : res.json({
          status: "error",
          message: "No product found",
        });
  } catch (error) {
    throw error;
  }
});

//GET ALL PRODUCTS
router.get("/", async (req, res) => {
  try {
    const result = await getAllProducts();
    res.json({
      status: "successfull",
      message: "Here are all  products",
      result,
    });
  } catch (error) {
    throw error;
  }
});

// UPDATE PRODUCT BY ID
router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    const newProduct = {
      ...req.body,
    };
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
      message: "Your product has been updated",
      updatedProduct,
    });
  } catch (error) {
    res.send({
      status: "error",
      message: "Unable please try again later",
    });
  }
});

router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;

    if (!req.params) {
      return res.json({
        status: "error",
        message: "Unable to add the product, Please try again later",
      });
    }

    const result = await deleteProductById(_id);

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
