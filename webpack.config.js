const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/js/layout.jsx',
    output: {
        path: __dirname,
        filename: './public/assets/dist/bundle.js'
    },
    module: {
        loaders: [{
            test : /\.jsx?/,
            exclude: /node_modules/,
            loader : 'babel-loader',
        }],
    },
    plugins: [
        new UglifyJSPlugin()
    ]
}