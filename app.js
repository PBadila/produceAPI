var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const session = require('express-session');
const passport = require('passport');
require('./config/passport')(passport);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const produceRouter = require('./routes/produce');
const recipesRouter = require('./routes/recipes');
const healthfactsRouter = require('./routes/healthfacts');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())


app.use(
    session({
      secret: 'P3I6T9A477%',
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/produce', produceRouter);
app.use('/recipes', recipesRouter);
app.use('/healthfacts', healthfactsRouter);


module.exports = app;
