// routes/profile.js
var express = require('express');
var User = require('./../models/User');
var profileRouter = express.Router();
const bcrypt = require('bcrypt')
const zxcvbn = require("zxcvbn");
const saltRounds = 10;


profileRouter.get('/', (req, res, next) => {
    User.findById(req.session.currentUser._id)
    .then(user =>{
        res.render('profile',{user})
    })
    .catch(err=>console.log(err))
})

profileRouter.post('/edit',(req,res, next)=>{
    const {username, password} = req.body;
    const id = req.session.currentUser._id;
    const salt = bcrypt.genSaltSync(saltRounds);  
    const hashedPassword = bcrypt.hashSync(password, salt);

    User.updateOne({_id: id},{username, password: hashedPassword})
    .then(user =>{
        res.redirect('/profile')
    })
    .catch(err=>console.log(err))
})

module.exports = profileRouter;