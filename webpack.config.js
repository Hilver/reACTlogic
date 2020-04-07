/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

module.exports = {
	mode: 'production',
	entry: {
		index: ['./src/lib/index.ts'],
		vendor: ['react', 'react-dom']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.bundle.js',
		libraryTarget: 'commonjs2'
	},
	// Enable sourcemaps for debugging webpack's output.
	devtool: 'source-map',

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: ['ts-loader', 'eslint-loader']
			},
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
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
