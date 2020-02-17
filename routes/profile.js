var express = require('express');
const siteRouter = require('./home');
var profileRouter = express.Router();
const User = require('../models/User');

/* GET home page. */
loginRouter.get('/', function(req, res, next) {
    res.render('auth-views/login');
  });
 

updateForm.addEventListener('submit', function(e) {
// Prevent the form reloading of the page
e.preventDefault();

// Get the id value from the last input field (the disabled one)
const id = document.querySelector('#user-id').value;

// Grab all input fields in form `PATCH - Update a character`
const inputNodes = updateForm.querySelector('input').value;
const updatedUser = {};
updatedUser[inputNodes.name] = inputNodes.value;


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