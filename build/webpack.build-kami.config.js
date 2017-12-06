const baseConfig = require('./webpack.base.config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = Object.assign({}, baseConfig, {
    entry: {
        main: path.resolve(__dirname, '../src/kami'),
    },
    output: {
        path: path.resolve(__dirname, '../dist/kami'),
        filename: 'Kami.js',
        library: 'Kami',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            'presets': ['es2015', 'stage-0'],
                            'plugins': ['transform-runtime', 'transform-decorators-legacy'],
                        }
                    }
                ],
                exclude: /node_modules/,
            },
        ]
    },
    devtool: '#source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new CleanWebpackPlugin(
            [path.resolve(__dirname, '../dist/kami') + '/*'],
            {
                root: path.resolve(__dirname, '../'),
                verbose:  true,
                dry:      false
            }
        ),
    ]
});