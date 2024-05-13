const { Item, Category } = require("../models");
const path = require("path");
const fs = require("fs");

// get all items
const getItems = async (req, res) => {
  try {
    const items = await Item.find().populate("category_id", "name");
    if (items.length > 0) {
      res.status(200).send(items);
    } else {
      res.status(404).send({ messageError: "No items here" });
    }
  } catch (error) {
    res
      .status(500)
      .send({ messageError: "Somthing goes wrong in server side!" });
  }
};

// get one item
const getItem = async (req, res) => {
  try {
    const { item_id } = req.params;
    const item = await Item.findById(item_id).populate("category_id", "name");
    if (!item) {
      res.status(404).send({ messageError: "Item doesn't found" });
    } else {
      res.status(200).send(item);
    }
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side!",
      error: error.message,
    });
  }
};

// get items by category
const getItemsByCategory = async (req, res) => {
  try {
    const { category_id, type } = req.params;
    let items;
    if (type === "best-selling") {
      items = await Item.find({ category_id, bestSelling: true });
    } else {
      items = await Item.find({ category_id });
    }
    if (items) {
      res.status(200).send(items);
    } else {
      res.status(200).send("There is an error in this method.");
    }
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side!",
      error: error.message,
    });
  }
};

// create item
const createItem = async (req, res) => {
  try {
    const { title, description, color, size, price, category_id, bestSelling } =
      req.body;
    const images = [];
    req.files.map((file, index) => {
      images.push(file.filename);
    });
    // chack item if exists
    const itemExists = await Item.find({ title });
    if (itemExists.length > 0) {
      res.status(400).send({ messageError: "This item is elready exists" });
    } else {
      const newItem = await Item.create({
        title,
        description,
        color,
        size,
        price,
        bestSelling,
        category_id,
        images: images,
      });
      if (newItem) {
        res.status(200).send({ messageSuccess: "New atem created", newItem });
      }
    }
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side!",
      error: error.message,
    });
  }
};

// delete item
const deleteItem = async (req, res) => {
  try {
    const { item_id } = req.params;
    const item = await Item.findByIdAndDelete(item_id);
    if (item) {
      item.images.forEach((image) => {
        const imagePath = path.join(
          path.dirname(__dirname),
          "public",
          "img",
          "items",
          `${image}`
        );
        try {
          fs.unlinkSync(imagePath);
          console.log(`Deleted image: ${image}`);
        } catch (error) {
          console.error(`Error deleting image ${image}: ${error}`);
        }
      });

      res.status(200).send({ messageSuccess: "Item deleted", item });
    } else {
      res.status(400).send({ messageError: "Item doesn't deleted" });
    }
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side!",
      error: error.message,
    });
  }
};

// update item
const updateItem = async (req, res) => {
  try {
    const { item_id } = req.params;
    const { title, description, size, price, bestSelling, category_id } =
      req.body;
    const images = [];
    req.files.map((file, index) => {
      images.push(file.filename);
    });
    const item = await Item.findById(item_id);
    if (item) {
      // Compare the images with the existing ones
      const imagesToDelete = item.images.filter(
        (image) => !image.includes(image)
      );

      // Delete images that are no longer associated with the item
      imagesToDelete.forEach((image) => {
        const imagePath = path.join(
          path.dirname(__dirname),
          "public",
          "img",
          "items",
          `${image}`
        );
        fs.unlinkSync(imagePath);
      });

      const updatedItem = await Item.findByIdAndUpdate(item_id, {
        title,
        description,
        size,
        price,
        category_id,
        images,
        bestSelling,
      });

      if (updatedItem) {
        res
          .status(200)
          .send({ messageSuccess: "Item updated successfully", updatedItem });
      } else {
        res.status(400).send({
          messageSuccess: "Item doesn't updated!",
          updatedItem,
        });
      }
    }
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side!",
      error: error.message,
    });
  }
};

// get best selling products
const getBestSelling = async (req, res) => {
  try {
    const bestSellingItems = await Item.find({ bestSelling: true })
      .sort({
        createdAt: "desc",
      })
      .populate("category_id");
    if (bestSellingItems.length == 0) {
      res.status(200).send({ messageError: "Best selling list is empty!" });
    } else {
      res.status(200).send(bestSellingItems);
    }
  } catch (error) {
    res.status(500).send({
      messageError: "Somthing goes wrong in server side",
      err: error.message,
    });
  }
};

// get item images
const getItemImage = async (req, res) => {
  try {
    await Item.findById(req.params.item_id)
      .exec()
      .then((result) => {
        res
          .status(200)
          .sendFile(
            path.join(
              path.dirname(__dirname),
              "public",
              "img",
              "items",
              result.images[0]
            )
          );
      });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// get item's images
const getItemImages = async (req, res) => {
  try {
    const item = await Item.findById(req.params.item_id).exec();

    if (!item) {
      return res.status(404).send("Item not found");
    }

    const imagesPath = path.join(
      path.dirname(__dirname),
      "public",
      "img",
      "items"
    );

    const imagePromises = item.images.map(async (imageName) => {
      const imagePath = path.join(imagesPath, imageName);
      return fs.promises.readFile(imagePath, { encoding: "base64" });
    });

    const imagesData = await Promise.all(imagePromises);

    res.status(200).json({ images: imagesData });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// get newest items
const getNewestItems = async (req, res) => {
  try {
    const newestItems = await Item.find({})
      .populate("category_id")
      .sort({ createdAt: "desc" });
    // .limit(6);

    if (newestItems.length == 0) {
      res.status(200).send({ messageError: "Newest list is empty!" });
    } else {
      res.status(200).send(newestItems);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// get other categories items
const getMismatchedCategoriesItems = async (req, res) => {
  try {
    const { category_id } = req.params;
    const items = await Item.find({
      category_id: { $ne: category_id },
    }).populate("category_id");
    if (items.length > 0) {
      res.status(200).send(items);
    } else {
      res.status(404).send("Emthy categories");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getItems,
  getItem,
  getItemsByCategory,
  createItem,
  deleteItem,
  updateItem,
  getBestSelling,
  getItemImage,
  getItemImages,
  getNewestItems,
  getMismatchedCategoriesItems,
};
