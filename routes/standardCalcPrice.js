const express = require('express');
const router = express.Router();
const data = require('../json/standard.json');

// @route    GET api/standard-calc-price/calc/:enter/:exit
// @desc     Calculate a standard price
// @access   Private
router.get('/enter/:enter/exit/:exit', (req, res) => {
  let enterTime = new Date(req.params.enter);
  let exitTime = new Date(req.params.exit);
  //let isStandard;
  let duration = exitTime.getHours() - enterTime.getHours();
  const maxStandardRate = data.find(({ maxHours }) => maxHours === 24);

  if (duration >= maxStandardRate.rate) {
    res.json({
      Name: 'Standard Rate',
      Price: maxStandardRate.rate
    });
  } else if (duration > 0) {
    for (let i = 0; i < data.length; i++) {
      if (duration <= data[i].maxHours) {
        res.json({
          Name: 'Standard Rate',
          Price: data[i].rate
        });
      }
    }
  }
});

module.exports = router;
