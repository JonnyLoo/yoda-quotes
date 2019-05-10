const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'web')));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.send('index.html');
});


app.listen(4000, () => {
  console.log('app listening on 4000');
});
