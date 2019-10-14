import * as React from "react"
import { IMemberRow } from "../../types"

const MemberRow: React.FC<IMemberRow> = ({ member }) => {
	return (
		<tr>
			<td>
				<img src={member.avatar_url} className="avatar" />
			</td>
			<td>
				<span>{member.id}</span>
			</td>
			<td>
				<span>{member.login}</span>
			</td>
		</tr>
	)
}

export { MemberRow }
