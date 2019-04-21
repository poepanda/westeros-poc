const layouts = require('./layouts')
const getPageHtml = require('./html/getPageHtml')

module.exports = function(req, res, next) {
  const layout = layouts[req.page.layout];
  const pageHtml = getPageHtml(layout, {
    page: req.page,
    // Some other config like seo, meta data, ...
  });

  res.write(pageHtml);
  res.end();
}