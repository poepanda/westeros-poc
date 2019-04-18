module.exports = function (req, res, next) {
  res.json({ api: true });
  console.timeEnd('request');
}