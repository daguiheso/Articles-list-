const path = require('path')

module.exports = {
	entry: './source/client.js', // archivo a leer
	output: {
		filename: 'app.js', // como se llamara
		path: path.resolve(__dirname, '../built/statics'), // ruta donde lo dejara
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
					presets: ['es2016', 'es2017', 'react'],
					plugins: ['transform-es2015-modules-commonjs'] // transforma todos los imports en modulos de commonjs
				}
			}
		]
	},
	target: 'web'
}