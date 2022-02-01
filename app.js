var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport'); 
var LocalStrategy = require('passport-local').Strategy; 
var mongoose = require('mongoose');
<<<<<<< HEAD
var Game = require("./models/game");
=======
var game = require("./models/game");

passport.use(new LocalStrategy(
  function(username, password, done) {
  Account.findOne({ username: username }, function (err, user) {
  if (err) { return done(err); }
  if (!user) {
  return done(null, false, { message: 'Incorrect username.' });
  }
  if (!user.validPassword(password)) {
  return done(null, false, { message: 'Incorrect password.' });
  }
  return done(null, user);
  });
  }));
>>>>>>> cf4779b7cf0a4675b6a9e15cfb7a72136724de78

const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// server start
async function recreateDB() {
  // Delete everything
<<<<<<< HEAD
  await Game.deleteMany();
  let instance1 = new
  Game({
    game_type: "regular",
    quantity: 12,
    cost: 38.24
  });
  let instance2 = new
  Game({
    game_type: "plus",
    quantity: 8,
    cost: 29.67
  });
  let instance3 = new
  Game({
    game_type: "v-power",
    quantity: 16,
    cost: 64.09
=======
  await game.deleteMany();
  let instance1 = new
  game({
    designer: "john carmack",
    price: "10",
    size: 15
  });
  let instance2 = new
  game({
    designe: "Rohith",
    price : "15",
    size: 20
  });
  let instance3 = new
  game({
    designe:"Mahesh",
    price: "20",
    size: 20
>>>>>>> cf4779b7cf0a4675b6a9e15cfb7a72136724de78
  });  
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved")
  });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Second object saved")
  });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("Third object saved")
  });
}

let reseed = true;
if (reseed) {
  recreateDB();
}


// We can seed the collection if needed on

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var gameRouter = require('./routes/game');
var addmodsRouter = require('./routes/addmods');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

var app = express();

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());


  app.use(require('express-session')({ 
    secret: 'keyboard cat', 
    resave: false, 
    saveUninitialized: false 
  }));
  app.use(passport.initialize()); 
  app.use(passport.session()); 



app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/game', gameRouter);
app.use('/addmods', addmodsRouter);
app.use('/selector', selectorRouter);
app.use('/', resourceRouter);
// passport config 
// Use the existing connection 
// The Account model  
var Account =require('./models/account'); 
 
passport.use(new LocalStrategy(Account.authenticate())); 
passport.serializeUser(Account.serializeUser()); 
passport.deserializeUser(Account.deserializeUser()); 

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