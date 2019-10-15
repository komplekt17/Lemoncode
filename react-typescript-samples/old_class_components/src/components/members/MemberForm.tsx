import * as React from "react"
import { IMemberFormProps } from "../../types"
import { Input, Button } from "../form"

const MemberForm: React.StatelessComponent<IMemberFormProps> = props => {
	return (
		<form>
			<h1>Manage member</h1>

			<Input
				name="login"
				label="Login"
				value={props.member.login}
				onChange={props.onChange}
			/>

			<Input
				name="avatar_url"
				label="Avatar Url"
				value={props.member.avatar_url}
				onChange={props.onChange}
			/>

			<Button
				label="Save"
				className="btn btn-default"
				onClick={props.onSave}
			/>
		</form>
	)
}

export { MemberForm }
