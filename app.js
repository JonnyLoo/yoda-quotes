const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const helloRoute = require('./routes/hello');
const logReqUrl = require('./middleware/log-req-url');

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(bodyParser.json());

if (process.env.NODE_ENV === 'dev') {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.dev.js');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(express.static(path.join(__dirname, 'web')));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', (req, res) => {
  res.send('index.html');
});

app.use('/api', logReqUrl, helloRoute);

app.listen(4000, () => {
  console.log('app listening on 4000');
});
