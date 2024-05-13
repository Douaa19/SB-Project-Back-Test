const express = require("express");
const app = express();

const auth = require("./authRoutes");
const items = require("./itemsRoutes");
const orders = require("./ordersRoutes");
const categories = require("./categoriesRoutes");
const users = require("./usersRoutes");

app.get("/api", (req, res) => {
  res.json({
    message: "Welcom to Saba Embroidery",
  });
});

app.use("/api/auth", auth);
app.use("/api/categories", categories);
app.use("/api/items", items);
app.use("/api/orders", orders);
app.use("/api/user", users);

module.exports = app;
