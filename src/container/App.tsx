import * as React from "react"
import { HashRouter, Switch, Route } from "react-router-dom"
import { LoginPage, PageB } from "../pages"
import { SessionProvider } from "../components"

export const App = () => {
	return (
		<SessionProvider>
			<HashRouter>
				<Switch>
					<Route exact={true} path="/" component={PageB} />
					<Route path="/login" component={LoginPage} />
				</Switch>
			</HashRouter>
		</SessionProvider>
	)
}
