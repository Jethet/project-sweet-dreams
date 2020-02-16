var express = require('express');
var router = express.Router();

var usersRouter = require('./users');
var loginRouter = require('./login');
var signupRouter  = require('./signup');
var homeRouter = require('./home');
var playerRouter = require('/player');
var playlistRouter = require('/playlistRouter');
var profileRouter = require('/profile');


router.use('/users', usersRouter);
router.use('/', loginRouter);
router.use('/signup', signupRouter);
router.use('/', homeRouter);
router.use('/player', playerRouter);
router.use('/playlist', playlistRouter);
router.use('/profile', profileRouter);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('auth-views/login');
});


module.exports = router;
