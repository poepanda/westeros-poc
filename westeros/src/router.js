const express = require('express');
const router = express.Router();

const pages = require('./pages');
const apis = require('./apis');

router.use('/api*', apis);

router.get('*', pages);

module.exports = router;
