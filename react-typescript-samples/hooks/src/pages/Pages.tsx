import * as React from "react"
import { Link } from "react-router-dom"
import { SessionContext } from "../components"

const PageB = () => {
	const loginContext = React.useContext(SessionContext)
	return (
		<div>
			<h2>Hello from page B</h2>
			<h3>User logged in: {loginContext.login}</h3>
			<br />
			<Link to="/login">Navigate to Login</Link>
		</div>
	)
}

export { PageB }
