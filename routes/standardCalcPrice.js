const express = require('express');
const router = express.Router();

// @route    GET api/standard/calc/:enter/:exit
// @desc     Calculate a standard price
// @access   Private
router.get(
  '/enter/:enter/exit/:exit',
  //(req, res) => res.send('Calc a standard parking fee')
  (req, res) => res.send(req.params)
);

module.exports = router;
