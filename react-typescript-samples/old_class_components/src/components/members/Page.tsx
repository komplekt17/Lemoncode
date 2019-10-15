import * as React from "react"
import { IPageProps } from "../../types"
import { MemberForm } from "../members"

const MemberPage: React.FC<IPageProps> = props => {
	return (
		<MemberForm
			member={props.member}
			onChange={props.onChange}
			onSave={props.onSave}
		/>
	)
}
export { MemberPage }
