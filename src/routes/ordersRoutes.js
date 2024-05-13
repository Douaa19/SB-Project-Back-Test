const express = require("express");
const router = express.Router();

// authorization
const {
  authorization,
  authorizationRole,
} = require("../middlewares/authorization");

// controllers
const { Order } = require("../controllers");

// create order
router.route("/create-order").post(authorization, Order.createOrder);

// get order
router.route("/get-order/:order_id").get();

// get orders
router.route("/get-orders").get();

// get my orders
router.route("/my-orders").get(authorization, Order.getMyOrders);

// delete orders
router.route("/delete-order/:order_id").post();

module.exports = router;
