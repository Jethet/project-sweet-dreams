// routes/auth.js
const express = require('express');
const authRouter = express.Router();
// Routers
const loginRouter = require('./login');
const signupRouter = require('./signup');
// * '/login'
authRouter.use('/login', loginRouter);
// * '/signup'
authRouter.use('/signup', signupRouter);
/* GET home page. */
authRouter.get('/', function(req, res, next) {
  if (req.session.currentUser) {
    res.redirect('/home');
  } else // if user is logged out 
  {
  res.render('index');
  }
});
module.exports = authRouter;