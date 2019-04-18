const layouts = require('./layouts')

module.exports = {
  common(req, res, next) {
    res.write(layouts[req.page.layout]());
    res.end();
  }
}