import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    isAvailable: {
      type: Boolean,
      require: true,
      default: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    description: {
      type: String,
      require: true,
      default: "",
    },

    qty: {
      type: Number,
      require: true,
    },
    images: {
      type: Array,
      required: false,
    },
    categories: {
      type: Array,
    },
    onSale: {
      type: Boolean,
      require: false,
      default: false,
    },
    salePrice: {
      type: Number,
      require: false,
      default: 0,
    },
    saleEndDate: {
      type: Date,
      require: false,
      default: undefined,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
