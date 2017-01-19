const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: "source-map",
  entry: {
    index: './src/js/index.js'
  },
  output: {
    path: __dirname + '/static',
    filename: '[name].js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.svg$/,
        loader: 'file-loader?name=images/[name].[ext]',
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          // activate source maps via loader query
          'css?sourceMap!postcss-loader!less?sourceMap'
        )
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ],
  devServer: {
    host: '0.0.0.0',
    port: 1357
  }
}
