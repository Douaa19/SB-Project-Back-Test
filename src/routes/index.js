const express = require("express");
const app = express();

const auth = require("./authRoutes");
const items = require("./itemsRoutes");
const orders = require("./ordersRoutes");
const categories = require("./categoriesRoutes");
const users = require("./usersRoutes");

app.get("/", (req, res) => {
  res.json({
    message: "Welcom to Saba Embroidery",
  });
});

app.use("/auth", auth);
app.use("/categories", categories);
app.use("/items", items);
app.use("/orders", orders);
app.use("/user", users);

module.exports = app;
