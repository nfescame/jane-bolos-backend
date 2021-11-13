const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  category: { type: String },
  unity: { type: String, enum: ["cento", "Kg", "unidade"], required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  value: { type: Number, required: true },
  pictureUrl: { type: String, trim: true },
});

const ProductModel = model("Product", ProductSchema);

module.exports = ProductModel;
