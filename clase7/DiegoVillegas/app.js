var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');
var serviciosRouter = require('./routes/servicios');
var gastosRouter = require('./routes/gastos');
var personalRouter = require('./routes/personal');
var BuilderRouter = require('./routes/admin/builder');
const session = require('express-session');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'pablitoclavounclavito',
  resave: false,
  saveUninitialized: true
}));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);
app.use('/personal', personalRouter);
app.use('/servicios', serviciosRouter);
app.use('/gastos', gastosRouter);
app.use('admin/builder', BuilderRouter);

secured = async (req, res, next) => {
  try {
    console.log(req.session.dni);
    if (req.session.dni) {
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error);
  }
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;