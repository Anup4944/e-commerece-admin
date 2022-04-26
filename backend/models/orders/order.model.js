import OrderSchema from "./order.schema.js";

export const getAllOrder = () => {
  return OrderSchema.find();
};

export const getProductInsideOrder = (_id) => {
  return OrderSchema.findOne({ $in: { products: _id } });
};
