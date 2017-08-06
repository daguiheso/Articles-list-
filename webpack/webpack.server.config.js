const path = require('path')

module.exports = {
	entry: './source/server.js', // archivo a leer
	output: {
		filename: 'index.js', // como se llamara
		path: path.resolve(__dirname, '../built/server'), // ruta donde lo dejara
	},
	module: {
		loaders: [
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /(node_modules)/,
				query: {
					presets: ['latest-minimal', 'react']
				}
			}
		]
	},
	target: 'node'
}