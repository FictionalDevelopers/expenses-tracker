const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { load } = require('dotenv-extended');

const { PORT } = load({ errorOnMissing: true });

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './build',
    hot: true,
    open: true,
    historyApiFallback: true,
    proxy: {
      '/api': `http://localhost:${PORT}`,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
    }),
  ],
};
