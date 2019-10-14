import * as React from "react"
import { memberAPI } from '../../api'
import { IMembersPage, IPropsMembersPage } from '../../types'
import { MemberHeader, MemberRow } from '../members'

class MembersPage extends React.Component<IPropsMembersPage, IMembersPage> {
	constructor(props: any) {
		super(props);
		this.state = { members: [] };
	}

	public componentDidMount() {
		memberAPI
			.fetchMembers()
			.then((members) => {
				this.setState({ members });
			});
	}

	public render() {
		return (
			<div className="row">
				<h2> Members Page</h2>
				<table className="table">
					<thead>
						{/* {MemberHeader()} */}
						<MemberHeader />
					</thead>
					<tbody>
						{/* {this.state.members.map(MemberRow)} */}
						{
             this.state.members.map((member) =>
               <MemberRow
                 key={member.id}
                 member={member}
               />
             )
           }
					</tbody>
				</table>
			</div>
		);
	}
};

export { MembersPage }
