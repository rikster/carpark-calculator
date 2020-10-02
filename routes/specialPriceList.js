const express = require('express');
const router = express.Router();
const data = require('../json/special.json');

// @route       GET api/special-price-list
// @desc        Get a special price list
// @access      Private
router.get('/', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});

module.exports = router;
