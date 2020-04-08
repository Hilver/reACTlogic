/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
	mode: 'production',
	entry: {
		index: ['./src/lib/index.ts'],
		vendor: ['react', 'react-dom']
	},
	output: {
		path: path.resolve(__dirname, '_bundles'),
		filename: '[name].bundle.js',
		libraryTarget: 'commonjs'
	},
	devtool: 'source-map',

	resolve: {
		extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: ['ts-loader', 'eslint-loader']
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				use: 'source-map-loader'
			}
		]
	},
	externals: {
		'react': 'commonjs react'
	}
}
