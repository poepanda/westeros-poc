module.exports = {
  isThisRequestCached: function(req, res, next) {
    // Do we have some cache here?
    next();
  }
};
