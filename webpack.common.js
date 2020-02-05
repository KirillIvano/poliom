const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const common = {
    entry: {
        common: './src/common.js',
        products: './src/products.js',
        main: './src/main.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    plugins: [
        // сплитим на две страницы
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),
        new HtmlPlugin({
            template: path.resolve(__dirname, 'src', 'products.html'),
            filename: 'products.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),

        new CleanWebpackPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.ts'],
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            exclude: [
                                /node_modules/,
                            ],
                            presets: ['@babel/preset-env'],
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
        ],
    },
};

module.exports.common = common;
