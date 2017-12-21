const baseConfig = require('./webpack.base.config');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = Object.assign({}, baseConfig, {
    entry: {
        main: path.resolve(__dirname, '../src/example'),
    },
    output: {
        path: path.resolve(__dirname, '../dist/example'),
        filename: '[name].[hash].js',
        chunkFilename: 'chunk.[name].[hash].js',
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
            {
                test: /\.(css|less)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!less-loader",
                }),
            },
        ]
    },
    devtool: '#source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: ({resource}) => /node_modules/.test(resource)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
        }),
        new ExtractTextPlugin({
            filename: '[hash].css',
            allChunks: false,
        }),
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
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/example/index.html'),
            inject: 'body',
        }),
        new CleanWebpackPlugin(
            [path.resolve(__dirname, '../dist/example') + '/*'],
            {
                root: path.resolve(__dirname, '../'),
                verbose:  true,
                dry:      false
            }
        ),
    ]
});