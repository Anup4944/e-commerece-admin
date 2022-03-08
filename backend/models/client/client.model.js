import ClientSchema from "./client.schema.js";

export const getAllClient = () => {
  return ClientSchema.find();
};

export const getClientByEmail = (email) => {
  return ClientSchema.findOne({ email });
};

export const getClientById = (_id) => {
  return ClientSchema.findById(_id);
};
