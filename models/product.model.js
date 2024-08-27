const { request } = require("express");
const mongoose = require("mongoose");


const productShcema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter Product Name"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    Image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productShcema);

module.exports = Product;