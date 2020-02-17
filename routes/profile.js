var express = require('express');
const siteRouter = require('./home');
var profileRouter = express.Router();
var loginRouter = require('./login')


module.exports = profileRouter;