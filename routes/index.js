var express = require('express');
var router = express.Router();

var usersRouter = require('./users');
var loginRouter = require('./login');
var signupRouter  = require('./signup');

router.use('/users', usersRouter);
router.use('/login', loginRouter);
router.use('/signup', signupRouter);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});




module.exports = router;
