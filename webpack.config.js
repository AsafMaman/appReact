const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin= require('html-webpack-plugin');

module.exports = {
    entry: [
        path.join(__dirname, 'app/src/index.jsx')
    ],
    output: {
        path: path.join(__dirname, 'app/dist'),
        filename: 'bundle.js',
    },
    module: {
    rules: [
        {test: /\.(js|jsx)$/, use: 'babel-loader'}
        ]
    },
     plugins: [
         new HtmlWebpackPlugin({
             template:'app/src/index.html'
         })
     ]

}

