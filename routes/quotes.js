const express = require('express');
const ROUTER = express.Router();

const controller = require('../api/controller');

ROUTER.get('/', controller.getQuotes);
ROUTER.get('/random', controller.getRandomQuote);

module.exports = ROUTER;
