import * as React from "react"
import { IFormButtonProps } from "../../types"

const Button: React.FC<IFormButtonProps> = props => {
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
