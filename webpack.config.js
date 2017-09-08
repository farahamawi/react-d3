const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './src/js/layout.jsx',
    output: {
        path: __dirname,
        filename: './public/assets/dist/bundle.js'
    },
     resolve: {
        modules: [__dirname, 'node_modules'],
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader'
            }
        }]
    },
    plugins: [
        new UglifyJSPlugin(),
    ],
}