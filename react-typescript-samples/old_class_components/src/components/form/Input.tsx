import * as React from "react"
import { IFormInputProps } from "../../types"

const Input: React.FC<IFormInputProps> = props => {
	return (
		<div className={formatWrapperClass(props)}>
			<label htmlFor={props.name}>{props.label}</label>
			<div className="field">
				<input
					type="text"
					name={props.name}
					className="form-control"
					placeholder={props.placeholder}
					value={props.value}
					onChange={onChangeInput(props)}
				/>
			</div>
			<div className="help-block">{props.error}</div>
		</div>
	)
}

const formatWrapperClass = (props: IFormInputProps) => {
	const wrapperClass = "form-group"

	return props.error ? `${wrapperClass} has-error` : wrapperClass
}

const onChangeInput = (props: IFormInputProps) => (
	e: React.ChangeEvent<HTMLInputElement>
) => {
	props.onChange(e.target.name, e.target.value)
}

export { Input }
