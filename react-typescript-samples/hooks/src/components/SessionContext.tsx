import * as React from "react"
import { ISessionContext } from "../types"

const createDefaultUser = (): ISessionContext => ({
	login: "no user",
	updateLogin: value => {
		console.warn(
			"if you are reading this, likely you forgot to add the provider on top of your app"
		)
	},
})

const SessionContext = React.createContext<ISessionContext>(
	createDefaultUser()
)

const SessionProvider: React.StatelessComponent = props => {
	const [login, setLogin] = React.useState<string>("")

	return (
		<SessionContext.Provider value={{ login, updateLogin: setLogin }}>
			{props.children}
		</SessionContext.Provider>
	)
}

export { SessionContext, SessionProvider }
