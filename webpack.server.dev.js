const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: ['@babel/polyfill', './server/index.js'],
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  plugins: [new NodemonPlugin()],
  externals: [nodeExternals()],
};
