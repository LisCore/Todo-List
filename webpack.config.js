const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const historyApiFallback = require('connect-history-api-fallback');

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "./src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name][contenthash].js',
        clean: true,
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ToDo List',
            filename: 'index.html',
            template: 'src/index.html',
        }),
    ],
};
