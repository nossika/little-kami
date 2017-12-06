const path = require('path');
const config = {
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
                loader: 'style-loader!css-loader!less-loader',
            },
        ]
    }
};

module.exports = config;