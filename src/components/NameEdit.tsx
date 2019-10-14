import * as React from "react"
import { INameEdit } from "../types"

const NameEditComponent = (props: INameEdit) => {
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		props.onEditingNameUpdated(event.target.value)
	}

	const onNameSubmit = (event: any): any => {
		props.onNameUpdated()
	}

	return (
		<React.Fragment>
			<label>Update name:</label>
			<br />
			<input value={props.editingName} onChange={onChange} />
			<button onClick={onNameSubmit} disabled={props.disabled}>
				Change
			</button>
		</React.Fragment>
	)
}

export { NameEditComponent }
