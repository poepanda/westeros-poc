const whatKindOfRequestIsThis = require('./masters/request').whatKindOfRequestIsThis;
const whoIsThisCustomer = require('./masters/user').whoIsThisCustomer;
const anyExtraInformation = require('./masters/meta').anyExtraInformation;
const isThisRequestCached = require('./masters/cache').isThisRequestCached;

module.exports = function(app) {
  // Add some middleware here
  app.use(whatKindOfRequestIsThis);
  app.use(whoIsThisCustomer);
  app.use(anyExtraInformation);
  app.use(isThisRequestCached);
}