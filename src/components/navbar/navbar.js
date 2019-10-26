import React from 'react';
import './navbar.scss';

function Navbar() {
  return (
    <div className="navbar">
      <span className="navbar__logo">
        <strong>ImageP</strong>
        <span className="navbar__company-name"> by ImageLabs</span>
        </span>

      <a href="/" className="navbar__signin">
        <i className="fa fa-github"></i> Sign in
      </a>
    </div>
  );
}

export default Navbar;
