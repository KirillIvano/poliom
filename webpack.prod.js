const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJs = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const autoprefixer = require('autoprefixer');

const {common} = require('./webpack.common');

const prod = {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserJs(),
            new OptimizeCssAssetsPlugin(),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer(),
                            ],
                        },
                    },
                    'less-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'image/',
                            publicPath: 'image/',
                            esModule: false,
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            pngquant: {
                                quality: [0.50, 0.70],
                                speed: 4,
                            },
                        },
                    },
                ],
            },
        ],
    },
};

module.exports = merge(common, prod);

