import React from 'react'

const Hello = () => {
	return (
		<html>
			<head>
				<title>Hono + React + Bun</title>
			</head>
			<body>
				<div id="root">
					<h1>Hello from Hono, React and Bun!</h1>
				</div>
				<script src="/public/client.js"></script>
			</body>
		</html>
	)
}

export default Hello
