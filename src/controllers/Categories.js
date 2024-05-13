const { Category } = require("../models");

// get all categories
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    if (categories.length > 0) {
      res.status(200).send(categories);
    }
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side!",
      error: error.message,
    });
  }
};

// get one category
const getCategory = async (req, res) => {
  try {
    const { category_id } = req.params;
    const category = await Category.find({ _id: category_id });
    if (category) {
      res.status(200).send(category);
    }
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side!",
      error: error.message,
    });
  }
};

// create category
const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const categoryExists = await Category.find({ name });
    if (categoryExists.length > 0) {
      res
        .status(400)
        .send({ messageError: "Category alredy exists", categoryExists });
    } else {
      const newCategory = await Category.create({ name });
      if (newCategory) {
        res.status(200).send({ messageSuccess: "Category created" });
      }
    }
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side!",
      error: error.message,
    });
  }
};

// delete category
const deleteCategory = async (req, res) => {
  try {
    const { category_id } = req.params;
    await Category.findByIdAndDelete(category_id).then((result) => {
      if (result) {
        res.status(200).send({ messageSuccess: "Category deleted" });
      }
    });
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side!",
      error: error.message,
    });
  }
};

// update category
const updateCategory = async (req, res) => {
  try {
    const { category_id } = req.params;
    const { name } = req.body;
    const nameExists = await Category.find({ name });
    if (nameExists.length > 0) {
      res.status(400).send({
        messageError: "This name category is alredy exists",
        nameExists,
      });
    } else {
      await Category.findByIdAndUpdate(category_id, { name }).then((result) => {
        if (result) {
          res.status(200).send({ messageSuccess: "Category updated", result });
        }
      });
    }
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side!",
      error: error.message,
    });
  }
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  deleteCategory,
  updateCategory,
};
