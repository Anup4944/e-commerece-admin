import CategorySchema from "./category.schema.js";

export const createCategory = (catObj) => {
  return CategorySchema(catObj).save();
};

export const getAllCategory = () => {
  return CategorySchema.find();
};

export const updateCategory = ({ _id, ...catData }) => {
  return CategorySchema.findByIdAndUpdate(
    { _id },
    { $set: catData },
    { new: true }
  );
};
