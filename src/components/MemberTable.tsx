import * as React from "react"
import { MemberRow } from "../components"
import { IMemberEntity } from "../types"
import { getMembersCollection } from "../api"

const useMemberCollection = () => {
	const [memberCollection, setMemberCollection] = React.useState<
		IMemberEntity[]
	>([])

	const loadMemberCollection = () => {
		getMembersCollection().then(memberCollection =>
			setMemberCollection(memberCollection)
		)
	}

	return { memberCollection, loadMemberCollection }
}

const MemberTableComponent = () => {
	const { memberCollection, loadMemberCollection } = useMemberCollection()

	React.useEffect(() => {
		loadMemberCollection()
	}, [])

	return (
		<>
			<table>
				<thead>
					<tr>
						<th>Avatar</th>
						<th>Id</th>
						<th>Name</th>
					</tr>
				</thead>
				<tbody>
					{memberCollection.map(member => (
						<MemberRow key={member.id} member={member} />
					))}
				</tbody>
			</table>
		</>
	)
}

export { MemberTableComponent }
