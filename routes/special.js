const express = require("express");
const router = express.Router();

// @route       GET api/special
// @desc        Get a special price list
// @access      Private
router.get("/", (req, res) => {
  res.send("Get special price list");
});