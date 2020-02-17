var express = require('express');
const siteRouter = require('./home');
var profileRouter = express.Router();
const User = require('../models/User');

/* GET home page. */
loginRouter.get('/', function(req, res, next) {
    res.render('auth-views/login');
  });
 


// LOGOUT user
router.get ('/', (req, res, next) => {
    req.session.destroy ( (err) => {
      if (err) {
        res.redirect('/error');
      } else {
        res.redirect('/login')
      }
    })
  })

module.exports = profileRouter;