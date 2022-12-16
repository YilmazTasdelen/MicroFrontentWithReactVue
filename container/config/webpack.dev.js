const { merge } = require('webpack-merge');
/**Merge is a function that we can use to merge together
two different webpack config objects.
So this merge function is what's going to
allow us to take all the config that we just wrote out
inside that common file and merge it together
with a configuration that we're about to write
inside this development file. */

const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');


const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);