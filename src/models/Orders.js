const mongoose = require("mongoose");

const Orders = new mongoose.Schema(
  {
    client_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    zipCode: {
      type: String,
      require: true,
    },
    status: {
      type: String,
      enum: ["pending", "prepared", "delivered", "lunched"],
      default: "pending",
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", Orders);

module.exports = Order;
