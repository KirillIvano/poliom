const merge = require('webpack-merge');
const {common} = require('./webpack.common');

const dev = {
    watch: true,
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            import: true,
                        },
                    },
                    'less-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|ico)$/,
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
                ],
            },

        ],

    },
};

module.exports = merge(common, dev);
