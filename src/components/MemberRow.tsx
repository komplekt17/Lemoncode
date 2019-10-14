import * as React from "react"
import { IMemberEntity } from "../types"

const MemberRow = ({ member }: { member: IMemberEntity }) => {
	return (
		<tr>
			<td>
				<img src={member.avatar_url} style={{ maxWidth: "10rem" }} />
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
