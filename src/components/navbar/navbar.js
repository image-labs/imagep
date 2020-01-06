import React from 'react';
import { connect } from 'react-redux';

import SignInButton from '../sign-in-button/sign-in-button';
import UserMenu from '../user-menu/user-menu';

import './navbar.scss';

const SIGN_IN_PATH = "/signin";

function Navbar(props) {
  let userControls;

  if(props.currentUser) {
    if(props.currentUser.isLoading) {
      userControls = <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>;
    } else {
      userControls = <UserMenu currentUser={props.currentUser}/>;
    }
  } else if(window.location.hash.indexOf(SIGN_IN_PATH) === -1) {
    userControls = <SignInButton/>;
  }

  return (
    <div className="navbar">
      <span className="navbar__logo">
        <a href="/#/">ImageP</a>
        <span className="navbar__company-name"> by ImageLabs</span>
      </span>

      {userControls}
    </div>
  );
}

const mapStateToProps = state => ({ currentUser: state.currentUser });
export default connect(mapStateToProps)(Navbar);