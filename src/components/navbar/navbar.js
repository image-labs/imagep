import React from 'react';
import './navbar.scss';
import { useAuth0 } from "../../commons/utils/auth0";
import Profile from "../profile/profile";

function Navbar() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className="navbar">
      <span className="navbar__logo">
        <strong>ImageP</strong>
        <span className="navbar__company-name"> by ImageLabs</span>
      </span>

      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})} className="navbar__signin">
          <i className="fa fa-github"></i> Sign in
        </button>
      )}
      {isAuthenticated && (
        <Profile/>
      )}
    </div>
  );
}

export default Navbar;
