const baseConfig = require('./webpack.base.config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = Object.assign({}, baseConfig, {
    entry: {
        main: path.resolve(__dirname, '../src/game'),
    },
    output: {
        path: path.resolve(__dirname, '../dist/game'),
        filename: '[name].[hash].js',
        chunkFilename: 'chunk.[name].[hash].js',
    },
    devServer: {
        hot: true,
        inline: true,
        open: true,
        openPage: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            inject: 'body',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
});
module.exports = config;