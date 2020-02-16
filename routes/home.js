var express = require('express');
var siteRouter = express.Router();

// AUTHENTICATION CHECKER
function isLoggedIn (req, res, next) {
  if (req.session.currentUser) 
    next();					
  else {         
  	res.redirect("/login");   
  }     
};					

siteRouter.get('/home', isLoggedIn, (req, res) => {
  res.render('home')
})

siteRouter.get('/player', (req, res) => {
    res.render('player')
})

siteRouter.get('/logout', (req, res) => {
  req.session.destroy( (err) => {
    res.redirect('/')
  })

})

module.exports = siteRouter;

