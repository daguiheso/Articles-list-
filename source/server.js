import http from 'http'
import React from 'react'
import { renderToString } from 'react-dom/server'

function requestHandler(request, response) {
	const html = renderToString(
		// como va sin props le pasamos null
		React.DOM.h1(null, 'hola')
	)

	// escribir respuesta
	response.write(html)
	// terminar la respuesta
	response.end()
}

const server = http.createServer(requestHandler)

server.listen(3000)