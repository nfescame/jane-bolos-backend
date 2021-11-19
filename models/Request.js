const { Schema, model, Types } = require("mongoose");

const RequestSquema = new Schema({
  products: { type: Array, default: [], required: true },
  totalValue: { type: Number, requered: true },
  clientName: { type: String, required: true },
  done: { type: Boolean, default: false },
});

const RequestModel = model("Request", RequestSquema);

module.exports = RequestModel;
