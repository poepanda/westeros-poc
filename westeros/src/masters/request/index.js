const pages = {
  '/': {
    type: 'page',
    id: 'merchant',
    layout: 'merchant',
    pageType: 'public'
  },
  '/content': {
    type: 'page',
    id: 'content',
    layout: 'content',
    pageType: 'public'
  },
  '/content-tw': {
    type: 'page',
    id: 'content',
    layout: 'content',
    pageType: 'country-specific',
    country: 'TW',
  },
  '/me': {
    type: 'page',
    id: 'me',
    layout: 'profile',
    pageType: 'customer'
  },
}
module.exports = {
  whatKindOfRequestIsThis: function (req, res, next) {
    req.page = pages[req.url];
    next();
  }
}