var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('./models/user');

// connect to the database with AFTER the config vars are processed
require('dotenv').config();
require('./config/database');
require('./config/passport');

// MY ROUTERS
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var vesselRouter = require('./routes/vessels');
var accountRouter = require ('./routes/account' )


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/vessels', vesselRouter)
app.use('/account', accountRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
