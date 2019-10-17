import * as React from "react"
import { Link } from "react-router-dom"
import { IMembersRowProps } from "../../types"

const MembersRow: React.FC<IMembersRowProps> = ({ member }) => {
	return (
		<tr>
			<td>
				<img src={member.avatar_url} className="avatar" />
			</td>
			<td>
				<Link to={`/member/${member.id}`}>{member.id}</Link>
			</td>
			<td>
				<span>{member.login}</span>
			</td>
		</tr>
	)
}

export { MembersRow }
