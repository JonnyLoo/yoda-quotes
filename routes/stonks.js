const express = require('express');
const ROUTER = express.Router();

const controller = require('../api/controller');

ROUTER.get('/:symbol', controller.getStonks);

module.exports = ROUTER;
