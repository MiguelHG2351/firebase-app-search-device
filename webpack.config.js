const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['css-loader', 'style-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ],
    devServer: {
        port: 5000,
    }
}