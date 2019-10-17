import * as React from 'react';
import { IMembersPageState, IMembersPageProps } from '../../types';
import { memberAPI } from '../../api';
import { MembersHeader, MembersRow } from '../members';

class MembersPage extends 
React.Component<IMembersPageProps, IMembersPageState> {
  constructor(props) {
    super(props);
    this.state = { members: [] };
  }

  public componentDidMount() {
    memberAPI.fetchMembersAsync()
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
            <MembersHeader />
          </thead>
          <tbody>
            {
              this.state.members.map((member) =>
                <MembersRow
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

export {MembersPage}