import * as React from "react"
import { IColorBrowser } from "../types"

const ColorBrowser = (props: IColorBrowser) => {
	const divStyle: React.CSSProperties = {
		width: "11rem",
		height: "7rem",
		backgroundColor: `rgb(${props.color.red},${props.color.green}, ${props.color.blue})`,
	}

	return <div style={divStyle} />
}

export { ColorBrowser }
