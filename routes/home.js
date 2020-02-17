var express = require('express');
var siteRouter = express.Router();

// AUTHENTICATION CHECKER
function isLoggedIn (req, res, next) {
  if (req.session.currentUser)
  {
    next();
  } 				
  else {         
  	res.redirect("/");   
  }     
};					

siteRouter.get('/home', isLoggedIn, (req, res) => {
  res.render('home')
})

siteRouter.get('/player', isLoggedIn, (req, res) => {
    res.render('player')
})

siteRouter.get('/logout',isLoggedIn, (req, res) => {
  req.session.destroy( (err) => {
    res.redirect('/')
  })

})

module.exports = siteRouter;