const server = require('./webpack/webpack.server.config.js')
const client = require('./webpack/webpack.client.config.js')

// cargando lista de objetos de configuracion
module.exports = [
	server,
	client
]