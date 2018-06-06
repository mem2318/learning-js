var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
	context: __dirname,
	devtool: debug ? "inline-sourcemap" : null,
	entry: "./js/stripts.js",
	output: {
		path: __dirname + "/js",
		filename: "scripts.min.js"
	},
	plugins: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		webpack.optimize.UglifyJsPlugin({magle: false, sourcemap: false}),
	],
};