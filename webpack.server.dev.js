const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: './server/index.js',
    watch: true,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
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
        new NodemonPlugin(),
    ],
};
