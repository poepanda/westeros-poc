const layouts = require('./layouts')

module.exports = function(req, res, next) {
  if (!req.user) {
    return res.redirect('/login');
  }

  const layout = layouts[req.page.layout];

  res.write(layout ? layout() : 'no layout found!');
  res.end();
}