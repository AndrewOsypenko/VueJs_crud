const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './app.js',
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [ MiniCssExtractPlugin.loader , 'css-loader']
            },
            {
                test: /\.(vue|js)$/,
                exclude: /node_modules/,
                use: ["eslint-loader"]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            collapseWhitespace: true,
            template: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000
    }
};