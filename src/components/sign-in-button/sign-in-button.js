import React from 'react';

import { generateSignInURL } from '../../commons/utils/github-auth';

import './sign-in-button.scss';

const signinURL = generateSignInURL();

function SignInButton() {
  return (
    <a href={signinURL} target="_blank" rel="noopener noreferrer" className="sign-in-button">
      <i className="fa fa-github"></i> Sign in <span className="with-gh">with GitHub</span>
    </a>
  );
}

export default SignInButton;
