const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const { ProvidePlugin } = require("webpack")

module.exports = {
    entry: {
        main: path.resolve(__dirname, "./web/main.js"),
    },
    output: {
        filename: "[name]-[chunkhash].js",
        path: path.resolve(__dirname, "./dist/web"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.(js|jsx)$/,
                use: ["babel-loader"],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./web/public/index.html"),
        }),
        new CleanWebpackPlugin(),
        // 配置这个能全局引用lodash文档
        new ProvidePlugin({
            _: "lodash",
        }),
    ],
    // 配置这玩意能够import引入.js文件.jsx组件不报错
    resolve: {
        extensions: [".js", ".jsx"],
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 name: "commons",
    //                 chunks: "initial",
    //                 minChunks: 2
    //             }
    //         }
    //     }
    // },
    // devServer: {

    // }
}
