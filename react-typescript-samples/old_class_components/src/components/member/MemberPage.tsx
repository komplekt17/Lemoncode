import * as React from "react"
import { IMemberPageProps } from "../../types"
import { MemberForm } from "../member"

const MemberPage: React.FC<IMemberPageProps> = props => {
	return (
		<MemberForm
			member={props.member}
			memberErrors={props.memberErrors}
			onChange={props.onChange}
			onSave={props.onSave}
		/>
	)
}

export { MemberPage }
