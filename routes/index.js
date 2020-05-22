const express = require('express');
const ROUTER = express.Router();

const quotes = require('./quotes');
const stonks = require('./stonks');

ROUTER.use('/quotes', quotes);
ROUTER.use('/stonks', stonks);

module.exports = ROUTER;
