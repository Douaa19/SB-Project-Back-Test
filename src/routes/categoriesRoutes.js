const express = require("express");
const router = express.Router();

// authorization
const {
  authorization,
  authorizationRole,
} = require("../middlewares/authorization");

// controllers
const { Categories } = require("../controllers");

// get gategories
router.route("/get-categories").get(Categories.getCategories);

// get gategory
router.route("/get-category/:category_id").get(Categories.getCategory);

// create gategory
router
  .route("/create-category")
  .post(authorization, authorizationRole("admin"), Categories.createCategory);

// delete gategory
router
  .route("/delete-category/:category_id")
  .post(authorization, authorizationRole("admin"), Categories.deleteCategory);

// update gategory
router
  .route("/update-category/:category_id")
  .post(authorization, authorizationRole("admin"), Categories.updateCategory);

module.exports = router;
