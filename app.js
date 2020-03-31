// set config folder
process.env['NODE_CONFIG_DIR'] = __dirname + '/config';


// required package
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sensorsRouter = require('./routes/sensors');
var databaseRouter = require('./routes/database');
var authRouter = require('./routes/auth');
var smsRouter = require('./routes/sms');

var app = express();

// set root dor
global.rootDir = path.resolve(__dirname);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.json({ type: 'application/*+json' }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// assign router
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sensors', sensorsRouter);
app.use('/database', databaseRouter);
app.use('/auth', authRouter);
app.use('/sms', smsRouter);

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

// enable cors
app.use(cors());

module.exports = app;
