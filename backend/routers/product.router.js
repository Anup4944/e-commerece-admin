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
    let error = null;

    const isAllowed = ALLOW_FILE_TYPE[file.mimetype];

    if (!isAllowed) {
      error = new Error(
        "Some of the file types are not allowed, Only images are allowed"
      );

      error.status = 400;
    }

    cb(error, "public/img/product");
  },
  filename: function (req, file, cb) {
    const fileName = slugify(file.originalname.split(".")[0]);

    const extension = ALLOW_FILE_TYPE[file.mimetype];

    const fullFileName = fileName + "-" + Date.now() + "." + extension;
    cb(null, fullFileName);
  },
});

const upload = multer({ storage: storage });

router.all("*", (req, res, next) => {
  next();
});
// ADD PRODUCT
router.post(
  "/",
  upload.array("images", 5),
  newProductValidation,
  async (req, res) => {
    try {
      const newProd = {
        ...req.body,
        date: new Date(req.body.saleEndDate),
      };

      const basePath = `${req.protocol}://${req.get("host")}/img/product/`;

      const files = req.files;

      const images = [];

      files.map((file) => {
        const imgFullPath = basePath + file.filename;
        images.push(imgFullPath);
      });

      const result = await insertProduct({ ...newProd, images });
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

    singleProduct?._id
      ? res.json({
          status: "success",
          message: "Here is single product",
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
router.put(
  "/:_id",
  upload.array("images", 5),
  updateProductValidation,
  async (req, res) => {
    try {
      const { _id } = req.params;
      const { imgToDelete, ...formDt } = req.body;

      const basePath = `${req.protocol}://${req.get("host")}/img/product/`;

      const files = req.files;

      const images = [];

      files.map((file) => {
        const imgFullPath = basePath + file.filename;
        images.push(imgFullPath);
      });

      if (imgToDelete?.length) {
        const deleteImgSource = imgToDelete.split(",");

        const prod = await getProductById(_id);

        if (!prod?._id) {
          return res.send({
            status: "error",
            message: "No product found",
          });
        }

        if (prod.images.length) {
          const updatingImages = prod.images.filter(
            (img) => !deleteImgSource.includes(img)
          );
          images = [...images, ...updatingImages];
        }
      }

      const newProduct = {
        ...formDt,
        date: new Date(req.body.saleEndDate),
        images,
      };

      const updatedProduct = await updateProductById({
        _id,
        newProduct,
      });

      res.status(200).send({
        status: "success",
        message: "Your product has been updated",
        updatedProduct,
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "error",
        message: "Unable please try again later",
      });
    }
  }
);

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
