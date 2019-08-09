const express = require('express');

const ROUTER = express.Router();
const controller = require('../api/controller');

ROUTER.post('/yoda', controller.getYodish);

module.exports = ROUTER;
