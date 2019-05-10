const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/app.js',
  output: {
    path: path.resolve(__dirname, 'web'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [{
      test: /(\.jsx|\.js)$/,
      include: path.join(__dirname, 'client'),
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/env',
            '@babel/react'
          ]
        }
      }
    }]
  }
};
