var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var router = require('./router');
var middleware = require('./middleware');

var app = express();
app.use(function(req, res, next) {
  console.time('request');
  next();
})
// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

middleware(app);

app.use(router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).end('not found');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.send(`error ${err.toString()}`);
});

module.exports = app;
