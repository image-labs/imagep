import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import { connect } from 'react-redux';

import { signOut } from '../../commons/utils/github-auth';
import currentUserReducer from '../../commons/reducers/current-user';

import './user-menu.scss';

class UserMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.signOutUser = () => {
      this.props.userActions.reset();
      signOut();
    };
  }

  render() {
    let user = this.props.currentUser;
    return (
      <div className="user-menu">
        <Dropdown alignRight={true}>
          <Dropdown.Toggle variant="link">
            <img alt="" className="avatar" src={user.avatarURL + "s=40"} height="20" width="20"></img>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/your">Your Functions</Dropdown.Item>
            <Dropdown.Item href="/starred">Starred Functions</Dropdown.Item>
            <Dropdown.Divider/>
            <Dropdown.Item onClick={this.signOutUser}>Sign Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({ userActions: currentUserReducer.getActions(dispatch) });
export default connect(null, mapDispatchToProps)(UserMenu);
