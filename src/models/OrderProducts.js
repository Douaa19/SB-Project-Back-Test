const mongoose = require("mongoose");

const OrderProducts = new mongoose.Schema(
  {
    order_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
    products_id: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
      },
    ],
    prices: [
      {
        type: Number,
      },
    ],
    quantities: [
      {
        type: Number,
      },
    ],
    totals: [
      {
        type: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const OrderProduct = mongoose.model("OrderProduct", OrderProducts);

module.exports = OrderProduct;
