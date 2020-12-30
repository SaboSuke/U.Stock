const { Schema, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: Array,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "In Stock",
      enum: ["In Stock", "Out Of Stock", "Low On Stock"],
    },
    internal_information: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = model("products", ProductSchema);
