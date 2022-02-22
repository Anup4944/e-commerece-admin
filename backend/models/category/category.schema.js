import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    parentCat: {
      type: mongoose.Schema.ObjectId,
      default: null,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Category", CategorySchema);
