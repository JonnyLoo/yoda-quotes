const express = require('express');

const ROUTER = express.Router();

ROUTER.get('/hello', (req, res) => {
  res.send({ greeting: 'hello' });
});

module.exports = ROUTER;
