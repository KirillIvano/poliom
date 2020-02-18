const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const generateHttpPluginInstances = pages =>
    pages.map(
        pagename => new HtmlPlugin({
            template: path.resolve(__dirname, 'src', pagename),
            filename: pagename,
            favicon: path.resolve(__dirname, 'src', 'image', 'favicon.ico'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
            },
        }),
    );

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
        ...generateHttpPluginInstances(['index.html', 'products.html']),
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
