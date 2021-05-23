var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs=require('ejs');
var session = require('express-session'); 
var mysql = require('mysql');

var loginRouter = require('./routes/login');
var registerRouter=require('./routes/register');
var aboutRouter = require('./routes/about');
var contactRouter = require('./routes/contact');
var indexRouter = require('./routes/index');
var servicesRouter = require('./routes/services');
var userRouter = require('./routes/user');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine(".html",ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret:"123",
  cookie:{maxAge:60000}
}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', loginRouter);
app.use('/register',registerRouter);
app.use('/about',aboutRouter);
app.use('/contact',contactRouter);
app.use('/',indexRouter);
app.use('/services',servicesRouter);
app.use('/user',userRouter);


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

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'aaa'
});

module.exports = app;
