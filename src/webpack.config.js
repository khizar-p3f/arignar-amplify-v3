/*
    ./webpack.config.js

*/

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const NODE_ENV = "production";

var APP_DIR = path.resolve(__dirname);
var BUILD_DIR = path.resolve(__dirname, "../", "build");

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: path.join(__dirname, "../", "public/index.html"),
	filename: "index.html",
	inject: "body",
});

console.log("---------------------- WEBPACK ------------------");
console.info({
	environment: NODE_ENV,
});
console.log("---------------------- WEBPACK ------------------");
module.exports = {
	stats: {
		errorDetails: true,
	},
	devtool: false,
	mode: "production",
	//watch: true,
	entry: {
		main: APP_DIR + "/index.js",
	},
	output: {
		filename: "[name].bundle.js",
		clean: true,
		pathinfo: true,
		path: BUILD_DIR,
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					{
						loader: "style-loader",
					},
					{
						loader: "css-loader",
					},
					{
						loader: "less-loader",
						options: {
							lessOptions: {
								/*  modifyVars: {
                  '@ant-theme-file': "; @import '" + path.resolve(__dirname, './client/src/fci/assets/css/index.less',) + "'",

                }, */
								javascriptEnabled: true,
							},
						},
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: () => [require("autoprefixer")],
							},
						},
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/react"],
					},
				},
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/react"],
					},
				},
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/react"],
					},
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
				generator: {
					filename: "fonts/[name].[ext]",
				},
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				loader: "file-loader",
				options: {
					name(resourcePath, resourceQuery) {
						return "images/[contenthash]-[name].[ext]";
					},
				},
			},
			{
				exclude: /node_modules/,
				test: /\.js/,
				use: [{ loader: "babel-loader" }],
			},
		],
	},
	plugins: [HtmlWebpackPluginConfig],
	optimization: {
		splitChunks: {
			chunks: "all",
			minSize: 20000,
			maxSize: 900000,
			minChunks: 1,
			maxAsyncRequests: 30,
			maxInitialRequests: 30,
			automaticNameDelimiter: "-",
			enforceSizeThreshold: 50000,
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
			},
		},
		minimizer: [
			new UglifyJsPlugin({
				parallel: 10,
				test: /\.js($|\?)/i,
				sourceMap: true,
				uglifyOptions: {
					warnings: false,
					keep_fnames: false,
				},
			}),
		],
	},
};
