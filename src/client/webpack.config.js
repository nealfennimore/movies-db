/**
 * External Dependencies
 */
const { resolve } = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    mode: 'production',
    context: resolve( __dirname ),
    entry: [
        './index.js',
    ],
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[id]-[hash].js',
        path: resolve( __dirname, '../../dist/client' ),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin( {
            title: 'Movies-DB',
            meta: {
                viewport: 'width=device-width, initial-scale=1',
            },
        } ),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    devServer: {
        contentBase: resolve( __dirname, '../../dist/client' ),
        hot: true,
        port: 9000,
        proxy: {
            '/api': 'http://localhost:3000',
        },
    },
};
