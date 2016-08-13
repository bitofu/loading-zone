var webpack = require('webpack');

module.exports = {
  entry: {
    html: "./app/index.html",
    javascript: "./app/index.js"
  },

  output: {
    filename: 'bundle.js',
    path: __dirname + '/public',
    publicpath: __dirname + '/public'
  },

  plugins: [
    new webpack.ProvidePlugin({
      fetch: 'node-fetch'
    })
  ],

  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'] },
      { test: /\.html$/,
        loader: 'file?name=[name].[ext]' },
      { test: /\.css$/,
        loader: 'style-loader!css-loader' },
      // Any png-image or woff-font below or equal to 100K will be converted to inline base64 instead
      { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader?limit=100000' },
      { test: /\.json$/,
        loader: 'json-loader' },
    ],
  }

};