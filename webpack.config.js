const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/js/index.js',
  ],
  output: {
    filename: './js/bundle.js'
  },
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.html$/,
      include: path.resolve(__dirname, 'src/html'),
      use: ['raw-loader']
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/html/index.html'
    }),
    new webpack.ProvidePlugin({
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      'jquery': 'jquery',
      'window.jquery': 'jquery',
      '$': 'jquery',
      'window.$': 'jquery'
    }),
  ],
  externals: {
    jquery: 'jQuery'
  }
};