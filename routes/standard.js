const express = require("express");
const router = express.Router();

// @route       GET api/standard
// @desc        Get a standard price list
// @access      Private
router.get("/", (req, res) => {
  res.send("Get a standard carpark  price list");
});

// @route    POST api/standard
// @desc     Post a standard prices list
// @access   Private
router.post('/', (req, res) => {
  res.send('Post a standard price list');
});

module.exports = router;

