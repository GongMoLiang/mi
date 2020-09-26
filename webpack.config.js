const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { ProvidePlugin } = require('webpack')

module.exports = {
	entry: {
		main: path.resolve(__dirname, './web/main.js')
	},
	output: {
		filename: '[name]-[chunkhash].js',
		path: path.resolve(__dirname, './dist/web')
	},
	module: {
		rules: [
            // css 文件规则
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
            },
            // less 文件规则
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
            },
            // jsx  文件规则
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
        // 能够设置html模板
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './web/public/index.html')
        }),
        // 每次打包之前能够将dist文件夹清空一遍
		new CleanWebpackPlugin(),
		// 配置这个能全局引用lodash文档,不用每个文件都引入lodash
		new ProvidePlugin({
			_: 'lodash'
		})
	],
	// 配置这玩意能够import引入.js文件.jsx组件不报错
	resolve: {
		extensions: ['.js', '.jsx']
	}
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
