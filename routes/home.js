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

siteRouter.get('/private', isLoggedIn, (req, res) => {
  res.render('private')
})

siteRouter.get('/home', (req, res) => {
    res.render('home')
  })

siteRouter.get('/logout', (req, res) => {
  req.session.destroy( (err) => {
    res.redirect('/')
  })
})

module.exports = siteRouter;

