import * as React from "react"
import { IHello } from "../types"

const HelloComponent = (props: IHello) => {
	return <h2>Hello user: {props.userName}!</h2>
}

export { HelloComponent }
