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
  console.log(_id, newProduct);
  return ProductSchema.findByIdAndUpdate(
    { _id },
    {
      $set: {
        isAvailable: newProduct.isAvailable,
        price: newProduct.price,
        quantity: newProduct.quantity,
        onSale: newProduct.onSale,
        salePrice: newProduct.salePrice,
        saleEndDate: newProduct.saleEndDate,
        images: newProduct.images,
      },
    },
    { new: true }
  );
};
