/* jshint node: true */
'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var DEBUG = (process.env.NODE_ENV !== 'production');
console.log('Starting webpack with DEBUG:', DEBUG);

var getEntryModules = function() {
  var modules = [];
  if (DEBUG) {
    modules.push('webpack/hot/dev-server');
  }

  modules.push(path.resolve(__dirname, 'app/index.js'));
  return modules;
};

var getPlugins = function() {
  var commonPlugins = [
      new HtmlWebpackPlugin({
        inject: true,
        template: 'app/templates/index.html',
      }),
      new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
  ];

  var productionPlugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),

    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        sequences: true,
        dead_code: true,
        drop_debugger: true,
        comparisons: true,
        conditionals: true,
        evaluate: true,
        booleans: true,
        loops: true,
        unused: true,
        hoist_funs: true,
        if_return: true,
        join_vars: true,
        cascade: true,
        drop_console: true,
      },

      // jscs:enable requireCamelCaseOrUpperCaseIdentifiers
      output: {
        comments: false,
      },
    }),
  ];

  var plugins = [].concat(commonPlugins);
  if (!DEBUG) {
    plugins = plugins.concat(productionPlugins);
  }

  return plugins;
};

var config = {
  entry: {
    modules: getEntryModules(),
    common: ['react', 'react-router', 'firebase'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['jsx', 'babel'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: getPlugins(),

  // plugins: [
  //   new HtmlWebpackPlugin({
  //     inject: true,
  //     template: 'app/templates/index.html',
  //   }),
  //   new webpack.optimize.OccurenceOrderPlugin(),
  //   new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
  //   new webpack.NoErrorsPlugin(),
  // ],
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
  },
};

module.exports = config;
