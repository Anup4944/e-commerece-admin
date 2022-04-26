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

export const updateClientPass = ({ _id, hashPass }) => {
  console.log(_id, hashPass);
  return ClientSchema.findByIdAndUpdate(
    { _id },
    {
      $set: { password: hashPass },
    },

    { new: true }
  );
};
