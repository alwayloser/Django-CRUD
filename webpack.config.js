const path = require("path");

const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
	mode: "development",
	entry: "./frontend/app.js",
	output: {
		path: path.resolve(__dirname, "./static/dist"),
		filename: "bundle.js",
	},

	module: {
		rules: [
			// ... other rules
			{
				test: /\.vue$/,
				loader: "vue-loader",
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
	],
};
