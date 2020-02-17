// routes/index.js
var express = require('express');
var router = express.Router();
var authRouter = require('./auth');
var siteRouter = require('./home');

router.use('/', authRouter);
router.use('/', siteRouter);
module.exports = router;