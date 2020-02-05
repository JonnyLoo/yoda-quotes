const express = require('express');
const ROUTER = express.Router();

const quotes = require('./quotes');

ROUTER.use('/quotes', quotes);

module.exports = ROUTER;
