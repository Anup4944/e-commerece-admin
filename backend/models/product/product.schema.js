import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    isAvailable: {
      type: Boolean,
      require: true,
      default: false,
    },
    title: {
      type: String,
      unique: true,
      require: true,
      default: "",
    },
    price: {
      type: Number,
      require: true,
      default: 0,
    },
    description: {
      type: String,
      require: true,
    },
    quantity: {
      type: Number,
      require: true,
    },
    images: {
      type: Array,
    },
    categories: {
      type: Array,
    },
    onSale: {
      type: Boolean,
    },
    salePrice: {
      type: Number,
    },
    saleEndDate: {
      type: Date,
      require: false,
      default: undefined,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", ProductSchema);
