const express = require("express");
const router = express.Router();

// @route       GET api/standard
// @desc        Get a standard price list
// @access      Private
router.get("/", (req, res) => {
  res.send("Get standard price list");
});

