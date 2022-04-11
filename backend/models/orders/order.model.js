import OrderSchema from "./order.schema.js";

export const getAllOrder = () => {
  return OrderSchema.find();
};
