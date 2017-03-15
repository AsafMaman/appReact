const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin= require('html-webpack-plugin');

module.exports = {
    entry: [
        // 'bootstrap-loader',
        path.join(__dirname, 'app/src/index.jsx')
    ],
    output: {
        path: path.join(__dirname, 'app/dist'),
        filename: 'bundle.js',
    },
    module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {
            test: /bootstrap-sass\/assets\/javascripts\//, 
            loader: 'imports?jQuery=jquery'
        },
        {
            test: /\.(png|jpg|jpeg|gif|eot|ttf|wav|mp3|svg|woff|woff2)$/,
            loader: 'url-loader?limit=10000'
        }, 
        // {
        //     test: /\.(eot|ttf|wav|mp3)$/,
        //     loader: 'file-loader'
        // },
        {
            test: /\.scss$/,
            use: [
                {loader: "style-loader"}, // creates style nodes from JS strings
                {loader: "css-loader"}, // translates CSS into CommonJS
                {loader: "sass-loader"} // compiles Sass to CSS
            ]     
        }
    ]
    },
     plugins: [
         new HtmlWebpackPlugin({
             template:'app/src/index.html'
         })
     ],
     devtool: "cheap-module-source-map"
}

