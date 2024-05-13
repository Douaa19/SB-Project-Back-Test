require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./src/routes");
const morgan = require("morgan");
const PORT = process.env.PORT || 8000;

// require mongoose
require("./src/config/mongoose");

// routes
const { auth, categories, items, orders } = require("./src/routes");

// meddlewares
app.use(morgan("tiny"));
app.use(
  cors({
    origin: "https://sabaembroidery.render.com",
    methods: ["GET", "POST"],
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(routes);

// use routes

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

module.exports = app;
