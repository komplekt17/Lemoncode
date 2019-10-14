import * as React from "react"
import { HashRouter, Switch, Route } from "react-router-dom"
import { LoginPage, PageB } from "../pages"

export const App = () => {
	return (
		<>
			<HashRouter>
				<Switch>
					<Route exact={true} path="/" component={PageB} />
					<Route path="/login" component={LoginPage} />
				</Switch>
			</HashRouter>
		</>
	)
}
