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

module.exports = router;
