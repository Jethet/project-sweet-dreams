// routes/home.js
var express = require('express');
var siteRouter = express.Router();
const profileRouter = require('./profile');
const playlistRouter = require('./playlist');
const playerRouter = require('./player');
// AUTHENTICATION CHECKER
siteRouter.use((req, res, next) => {
  if (req.session.currentUser) { // <== if there's user in the session (user is logged in)
    next(); // ==> go to the next route ---
  } 																//		|
  else {                          	//    |
  	res.redirect("/login");       	//    |
  }                                 //    |
});																	//		|
	// 	 ------------------------------------
    // |
    // V
siteRouter.use('/profile', profileRouter)
siteRouter.use('/playlist', playlistRouter)
siteRouter.use('/player', playerRouter)
siteRouter.get('/home', (req, res, next) => {
  res.render('home')
})
siteRouter.get('/logout', (req, res, next) => {
  req.session.destroy( (err) => {
    console.log('YOU HAVE BEEN LOGGED OUT');
    res.redirect('/');
  })
})
module.exports = siteRouter;