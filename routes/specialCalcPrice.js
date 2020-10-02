const express = require('express');
const router = express.Router();

// @route    GET api/special-calc-price/calc/:enter/:exit
// @desc     Calculate a special price
// @access   Private
router.get(
  '/enter/:enter/exit/:exit',
  //(req, res) => res.send('Calc a special parking fee')
  (req, res) => res.send(req.params)
);

module.exports = router;
