// routes/profile.js
var express = require('express');
var profileRouter = express.Router();
profileRouter.get('/', (req, res, next) => {
  res.render('profile')
})
module.exports = profileRouter;