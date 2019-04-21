const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.json({ api: true });
  console.timeEnd('request');
});

module.exports = router;