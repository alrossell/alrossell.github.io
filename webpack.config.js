var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
	template: "./src/index.html",
	filename: "./index.html"
});
	
module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: { loader: "babel-loader" }
		},
		{
			test: /\.css$/,
			use: ["style-loader", "css-loader"]
		},
		{
			test: /\.(png|svg|jpg|jpeg|gif|pdf)$/i,
			type: 'asset/resource',
		},
	]},
	devServer: {
		historyApiFallback: true,
	  },
	plugins: [htmlPlugin]
};

