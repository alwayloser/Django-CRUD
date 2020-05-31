const path = require("path");

const VueLoaderPlugin = require("vue-loader/lib/plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",
	entry: ["./frontend/app.js", "./frontend/app.scss"],

	output: {
		path: path.resolve(__dirname, "./static/dist"),
		filename: "app.js",
	},

	module: {
		rules: [
			// ... other rules
			{
				test: /\.vue$/,
				loader: "vue-loader",
			},

			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
						},
					},
					{
						loader: "postcss-loader",
					},
					{
						loader: "sass-loader",
					},
				],
			},

			{
				// Extract any CSS content and minimize
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: "css-loader", options: { importLoaders: 1 } },
					{ loader: "postcss-loader" },
				],
			},
		],
	},

	resolve: {
		alias: {
			vue$: "vue/dist/vue.esm.js",
		},
		extensions: ["*", ".js", ".vue", ".json"],
	},

	plugins: [
		// make sure to include the plugin!
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: "app.css",
			chunkFilename: "[id].css",
		}),
	],
};
