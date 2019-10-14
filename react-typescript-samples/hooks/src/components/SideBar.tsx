import * as React from "react"
import { ISideBar } from "../types"

const classNames = require("../styles/sidebar.css")

const divStyle = (props: ISideBar): React.CSSProperties => {
	return { width: props.isVisible ? "23rem" : "0rem" }
}

const SidebarComponent: React.StatelessComponent<ISideBar> = props => {
	return (
		<div
			id="mySidenav"
			className={classNames.sidenav}
			style={divStyle(props)}
		>
			<span>Basic side bar, first steps</span>
			{props.children}
		</div>
	)
}

export { SidebarComponent }
