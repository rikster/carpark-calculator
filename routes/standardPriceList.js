const express = require('express');
const router = express.Router();
const data = require('../json/standard.json')

// @route       GET api/standard
// @desc        Get a standard price list
// @access      Private
router.get('/', (req, res) => {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
});

module.exports = router;
