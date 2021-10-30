const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  category: {
    type: String,
  },
  product: [
    {
      title: { type: String, required: true },
      description: { type: String, required: true },
      value: { type: Number, required: true },
      img: { type: String, required: true },
    },
  ],
});

const ProductModel = model("Product", ProductSchema);

module.exports = ProductModel;
