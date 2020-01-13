import React from 'react';
import { connect } from 'react-redux';

import SignInButton from '../sign-in-button/sign-in-button';
import UserMenu from '../user-menu/user-menu';

import './navbar.scss';

const SIGN_IN_PATH = "/signin";

function Navbar(props) {
  let userControls;

  if(window.navigator.onLine === false) {
    userControls = <i class="fa fa-exclamation-circle" aria-hidden="true" title="Network cannot be reached!"></i>;
  } else if(props.currentUser) {
    if(props.currentUser.isLoading) {
      userControls = <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>;
    } else {
      userControls = <UserMenu currentUser={props.currentUser}/>;
    }
  } else if(window.location.hash.indexOf(SIGN_IN_PATH) === -1) {
    userControls = <SignInButton/>;
  }

  return (
    <header className="navbar">
      <span className="logo">
        <a href="/#/">ImageP</a>
        <span className="company-name"> by ImageLabs</span>
      </span>

      {userControls}
    </header>
  );
}

const mapStateToProps = state => ({ currentUser: state.currentUser });
export default connect(mapStateToProps)(Navbar);