const router = require("express").Router();
const RequestModel = require("../models/Request.js");

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

module.exports = router;
