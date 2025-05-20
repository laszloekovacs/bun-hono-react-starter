import { Hono } from 'hono'
import { renderToReadableStream } from 'react-dom/server'
import { createElement } from 'react'
import App from './App'
import { serveStatic } from 'hono/bun'
import { logger } from 'hono/logger'

const app = new Hono()

app.use(logger())

app.get('/', async (c) => {
	//Create the app root element
	const appElement = createElement(App)

	// render to pipe, add hydration script
	const stream = await renderToReadableStream(appElement, {
		bootstrapScriptContent: `
		import { hydrateRoot } from 'react-dom/client'
		import React from 'react'
		import App from './App'
		
		hydrateRoot(
		  document.getElementById('root'),
		  React.createElement(App)
		)
		`,
	})

	return new Response(stream, {
		headers: {
			'Content-type': 'text/html',
		},
	})
})

app.use('/public/*', serveStatic({ root: './public' }))

export default app
