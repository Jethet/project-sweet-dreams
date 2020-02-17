// routes/login.js
var express = require('express');
var loginRouter = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
// GET /login
loginRouter.get('/', function(req, res, next) {
    res.render('auth-views/login');
});
// POST /login
loginRouter.post('/', (req, res, next) => {
    const { username, password} = req.body;
    console.log("Print req.body", req.body)
    if(username === "" || password === ""){
        res.render("auth-views/login", {
            errorMessage: "Please provide the required username and password"
        });
        return;
    };
    User.findOne({username})
    .then( (user) => {
        if (!user) {
            res.render("auth-views/login", {
                errorMessage: "Username does not exist"
        });
        return;
    }
    const passwordFromDB = user.password;
    const passwordCorrect = bcrypt.compareSync(password, passwordFromDB);
    if (passwordCorrect) {
        req.session.currentUser = user;
        console.log(user)
        res.redirect('/home')
        } else {
        res.render("auth-views/login", {
            errorMessage: "Incorrect password"
        });
        }
    }) .catch(err => console.log(err));
});
module.exports = loginRouter;