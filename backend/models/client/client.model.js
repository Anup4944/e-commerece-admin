import ClientSchema from "./client.schema.js";

export const getUsers = () => {
  return ClientSchema.find();
};

export const getUserByEmail = (email) => {
  return ClientSchema.findOne({ email });
};

export const getUserById = (_id) => {
  return ClientSchema.findById(_id);
};
