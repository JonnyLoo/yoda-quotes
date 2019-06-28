const express = require('express');

const ROUTER = express.Router();
const controller = require('../api/controller');

ROUTER.get('/hello', controller.getHello);

module.exports = ROUTER;
