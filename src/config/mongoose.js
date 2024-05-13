const mongoose = require("mongoose");

mongoose.connect(process.env.DB_HOST, (e) => {
  if (e) {
    console.log("Can't connect to database: ", e.message);
  } else {
    console.log("Database mongo connected");
  }
});

module.exports = mongoose;
