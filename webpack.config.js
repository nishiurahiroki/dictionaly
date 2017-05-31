const path = require('path');

module.exports = {
    entry: {
        bundle: './front/app.js'
    },
    output: {
        path: path.join(__dirname, 'resources'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js[x]?$/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    devtool: 'source-map'
};
