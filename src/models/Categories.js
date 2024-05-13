const mongoose = require("mongoose");

const Categories = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", Categories);

module.exports = Category;
