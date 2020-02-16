var express = require('express');
var router = express.Router();

var usersRouter = require('./users');
var loginRouter = require('./login');
var signupRouter  = require('./signup');
var homeRouter = require('./home')


router.use('/users', usersRouter);
router.use('/', loginRouter);
router.use('/signup', signupRouter);
router.use('/', homeRouter)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('auth-views/login');
});




module.exports = router;
