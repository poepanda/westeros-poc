const pagesDirectory = require('./pages.config.js');

const isMobile = function (agent = '') {
  const mobileAgents = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/;
  return mobileAgents.test(agent);
}

module.exports = {
  whatKindOfRequestIsThis: function (req, res, next) {
    const page = pagesDirectory[req.path];
    
    if (page) {
      // This is a page
      page.isMobile = isMobile(req.headers['user-agent']);
      req.page = page;
    }

    next();
  }
}