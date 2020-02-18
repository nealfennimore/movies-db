/**
 * External Dependencies
 */
const { resolve } = require( 'path' );
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    context: resolve( __dirname ),
    entry: [
        './index.js',
    ],
    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id]-[chunkhash].js',
        path: resolve( __dirname, '../../dist/client' ),
        publicPath: '/'
    },
    resolve: {
        extensions: [ '.js', '.jsx', '.json' ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [ 'babel-loader', ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Movies.neal.cloud'
        })
    ]
};