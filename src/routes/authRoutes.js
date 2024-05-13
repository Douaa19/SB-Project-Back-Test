const express = require("express");
const router = express.Router();

// authorization
const {
  authorization,
  authorizationRole,
} = require("../middlewares/authorization");

// controller
const { Users } = require("../controllers");

// register
router.route("/register").post(Users.handleRegister);

// register
router.route("/login").post(Users.hendleLogin);

// forget password
router.route("/forget-password").post(Users.forgetPassword);

// recreat password
router.route("/recreat-password/:user_id").post(Users.recreatPassword);

module.exports = router;
