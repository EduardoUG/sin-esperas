const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const ordersRouter = require('./routes/activeOrders')
const newOrderRouter = require('./routes/getNewOrder')
const orderDispatchRouter = require('./routes/orderDispatch')

const app = express()
const server = require("http").Server(app)
const io = require("socket.io")(server)


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
// Add CORS Functionality
app.use(cors())
app.use(function(req, res, next) {
  console.log(req.method)
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', '*');
    // return res.status(200).json({});
  }
  next()
});
app.use(express.urlencoded({ extended: false }));
//Add socket.io as a middleware
app.use(function(req, res, next){
  res.io = io;
  next();
});
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/addNewOrder', newOrderRouter);
app.use('/orderDispatch', orderDispatchRouter);

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

module.exports = {
  app,
  server
};
