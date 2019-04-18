const page = require('../masters/page');

module.exports = function (req, res, next) {
  // This is where we handle the route specific page type
  console.log(req.page.type);
  switch(req.page.type) {
    case 'public': return page.common(req, res, next);
    default: return page.common(req, res, next);
  }
}