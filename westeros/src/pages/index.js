const page = require('../masters/page');
const express = require('express');
const router = express.Router();

module.exports = router;

router.get('*', function (req, res, next) {
  if (!req.page) {
    // Page Not found!
    return next();
  }

  // This is where we handle the route specific page type
  switch(req.page.type) {
    // customer: a page that need user to login 
    case 'customer': return page.customer(req, res, next);
    default: return page.common(req, res, next);
  }
});
