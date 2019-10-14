import * as React from "react"
import { IColorSlider } from "../types"

const ColorSlider = (props: IColorSlider) => {
	return (
		<div>
			<input
				type="range"
				min="0"
				max="255"
				value={props.value}
				onChange={event => props.onValueUpdated(+event.target.value)}
			/>
			{props.value}
		</div>
	)
}

export { ColorSlider }
