const express = require('express');
const ROUTER = express.Router();

const controller = require('../api/controller');

ROUTER.get('/', controller.getQuotes);

module.exports = ROUTER;
