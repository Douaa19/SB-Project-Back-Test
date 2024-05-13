const Users = require("./UsersController");
const Categories = require("./Categories");
const Item = require("./Items");
const Order = require("./Orders");

// multer
const path = require("path");
const multer = require("multer");

//storage
const storage = (pathName) => {
  return multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, pathName);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
};

// filter
const fFilter = (req, file, cb) => {
  // allowed ext
  const filetypes = /jpeg|jpg|png|svg/;

  // check ext
  const extname = filetypes.test(
    path.extname(file.originalname).toLocaleLowerCase()
  );

  // check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Image only");
  }
};

const uploadImages = multer({
  fileFilter: fFilter,
  storage: storage(
    path.join(path.dirname(__dirname), "public", "img", "items")
  ),
});

module.exports = {
  Users,
  Categories,
  Item,
  uploadImages,
  Order,
};
