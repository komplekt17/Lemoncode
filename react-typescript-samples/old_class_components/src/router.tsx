import * as React from "react"
import { Route, HashRouter as Router, Switch } from "react-router-dom"
import { App } from "./container/App"
import { About, MembersPage, MemberPageContainer } from "./components"

export const AppRouter: React.FC<{}> = () => {
	return (
		<Router>
			<div className="container-fluid">
				<Route component={App} />
				<Switch>
					<Route exact path="/" component={About} />
					<Route path="/about" component={About} />
					<Route path="/members" component={MembersPage} />
					<Route exact path="/member" component={MemberPageContainer} />
					<Route path="/member/:id" component={MemberPageContainer} />
				</Switch>
			</div>
		</Router>
	)
}
