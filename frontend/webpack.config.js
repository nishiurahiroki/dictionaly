const path = require('path');

module.exports = {
    entry: {
        bundle: '/app/src/app.js'
    },
    output: {
        path: path.join('/app/output'),
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
