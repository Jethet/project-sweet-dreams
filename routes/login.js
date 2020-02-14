var express = require('express');
var loginRouter = express.Router();
const User = require('./../models/User');
// const bcrypt = require('bcrypt')

/* GET home page. */
loginRouter.get('/', function(req, res, next) {
    res.render('auth-views/login');
  });
 
  

  module.exports = loginRouter;