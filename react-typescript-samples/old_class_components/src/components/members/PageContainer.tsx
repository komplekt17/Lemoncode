import * as React from 'react'
import * as toastr from 'toastr'
import { memberAPI } from '../../api'
import { IPageContainerState, IPageContainerProps } from '../../types'
import { MemberPage } from '../members'

class MemberPageContainer extends 
React.Component<IPageContainerProps, IPageContainerState> {
  constructor(props: any) {
    super(props);

    this.state = {
      member: {
        id: -1,
        login: '',
        avatar_url: '',
      }
    };

    this.onFieldValueChange = this.onFieldValueChange.bind(this);
  }

  private onFieldValueChange(fieldName: string, value: string) {
    const nextState = {
      ...this.state,
      member: {
        ...this.state.member,
        [fieldName]: value,
      }
    };

    this.setState(nextState);
  }

  private onSave() {
    memberAPI
      .saveMember(this.state.member)
      .then(() => {
        toastr.success('Member saved.');
        this.props.history.goBack();
     });
  }

  public render() {
    return (
      <MemberPage
        member={this.state.member}
        onChange={this.onFieldValueChange}
        onSave={this.onSave}
      />
    );
  }
}

export { MemberPageContainer }