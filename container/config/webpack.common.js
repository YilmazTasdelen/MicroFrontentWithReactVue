const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ]
};

/**
 * We will give it a test property and put in /\.m?js$/.
 *  So this essentially says, that whenever we import in a file
 *  that ends with an extension of either mjs or just js, 
 * we want it to be processed by bable. That's all test does. 
 * 
 * Next up, we will add in an exclude property. 
 * We'll put in /node_modules. So that means, 
 * do not try to run this bable thing on any file out 
 * of our node modules directory. 
 * 
 * We'll then add in use,
 *  assign an object to it, put in loader babel-loader.
 *  Immediately after that,
 * 
 *  we'll put in another key of options,
 *  inside there we will write out presets. That's gonna be an array.
 *  We'll give it a string of, @babel/preset-env.
 * 
 *  We're also going to,
 *  right before that I put in the second string first
 *  So right before that string, we're gonna put in another string of
 *  @babel/preset-react.
 * 
 * 
 * 
 */