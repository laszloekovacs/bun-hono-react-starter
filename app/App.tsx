import React from 'react'

const App = () => {
	return (
		<html>
			<head>
				<title>Hono + React + Bun</title>
			</head>
			<body>
				<div id="root">
					<h1>Hello from Hono, React and Bun!</h1>
					<small>Start building something amazing!</small>
					<small>if you happen to use this, let me know about your cool project!</small>
				</div>
				<script src="/public/client.js"></script>
			</body>
		</html>
	)
}

export default App
