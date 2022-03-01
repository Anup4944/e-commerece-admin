import ProductSchema from "./product.schema.js";

export const insertProduct = (prodObj) => {
  return ProductSchema(prodObj).save();
};

export const getAllProducts = () => {
  return ProductSchema.find();
};

export const getProductById = (_id) => {
  return ProductSchema.findById(_id);
};

export const deleteProductById = (_id) => {
  return ProductSchema.findByIdAndDelete(_id);
};

export const updateProductById = ({ _id, newProduct }) => {
  return ProductSchema.findByIdAndUpdate(
    { _id },
    {
      $set: newProduct,
    },
    { new: true }
  );
};
