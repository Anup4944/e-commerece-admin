import ProductSchema from "./product.schema.js";

export const insertProduct = (prodObj) => {
  return ProductSchema(prodObj).save();
};

export const getAllProducts = () => {
  return ProductSchema.find();
};

export const getProductById = () => {
  return ProductSchema.findById(_id);
};

export const deleteProduct = (_id) => {
  return ProductSchema.findByIdAndDelete(_id);
};

export const updateProductById = ({ _id, updateProduct }) => {
  return ProductSchema.findByIdAndUpdate(
    { _id },
    {
      $set: updateProduct,
    },
    { new: true }
  );
};
