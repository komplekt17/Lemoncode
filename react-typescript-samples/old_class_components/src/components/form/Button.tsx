import * as React from "react"
import { IPropsButton } from "../../types"

const Button: React.FC<IPropsButton> = props => {
	return (
		<button
			type="button"
			className={props.className}
			onClick={props.onClick}
		>
			{props.label}
		</button>
	)
}
export { Button }
