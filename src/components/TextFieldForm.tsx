import * as React from "react"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography/Typography"
import { ITextFieldForm } from "../types"

const defaultProps: Partial<ITextFieldForm> = {
	type: "text",
}

const onTextFieldChange = (
	fieldId: string,
	onChange: (fieldId: any, value: any) => void
) => (e: any) => {
	onChange(fieldId, e.target.value)
}

const TextFieldForm: React.StatelessComponent<ITextFieldForm> = props => {
	const { name, label, onChange, value, error, type } = props
	return (
		<>
			<TextField
				label={label}
				margin="normal"
				value={value}
				type={type}
				onChange={onTextFieldChange(name, onChange)}
			/>
			<Typography variant="caption" color="error" gutterBottom={true}>
				{props.error}
			</Typography>
		</>
	)
}

export { TextFieldForm }
