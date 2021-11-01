const router = require("express").Router();
const ProductModel = require("../models/Product");
const uplouder = require("../config/cloudinary.config");

// rota upload de arquivos

router.post(
  "/image-upload",
  uplouder.single("productPicture"),
  (req, res, next) => {
    if (!req.file) {
      return next(new Error("Upload não condeguiu ser finalzado"));
    }

    console.log(req.file);

    return res.status(201).json({ url: req.file.path });
  }
);

// create post
router.post("/products", async (req, res) => {
  console.log(req.body);
  try {
    const result = await ProductModel.create({
      ...req.body,
    });
    return res.status(201).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: JSON.stringify(err) });
  }
});

// get all products

router.get("/products", async (req, res) => {
  try {
    const result = await ProductModel.find({
      ...req.body,
    });
    if (!result) {
      return res.status(404).json({ msg: "Product not found" });
    }
    console.log(result);
    return res.status(200).json({ result });
  } catch (err) {
    console.error(err);
  }
});

// get one by id

router.get("/products/filter/:id", async (req, res) => {
  try {
    const result = await ProductModel.findOne(
      {
        _id: req.params.id,
      },
      { _id: 0 }
    );
    if (!result) {
      return res.status(404).json({ msg: "Product not found" });
    }
    console.log(result);
    return res.status(200).json({ result });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
