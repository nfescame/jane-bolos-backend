const router = require("express").Router();
const RequestModel = require("../models/Request.js");

//create
router.post("/request", async (req, res) => {
  console.log(req);
  try {
    const result = await RequestModel.create({
      ...req.body,
    });
    return res.status(201).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: JSON.stringify(err) });
  }
});

//get all
router.get("/request/all", async (req, res) => {
  try {
    const result = await RequestModel.find({
      ...req.body,
    });
    if (!result) {
      return res.status(404).json({ msg: "Request not found" });
    }
    console.log(result);
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
  }
});

//delete
router.delete("/request/delete/:id", async (req, res, next) => {
  try {
    const result = await RequestModel.deleteOne({
      _id: req.params.id,
    });

    // condole.log(req.params_id);
    if (result.deletedCount < 1) {
      return res.status(404).json({ msg: "Request not found" });
    }

    return res.status(200).json({});
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
