import React from 'react';

import { generateSignInURL } from '../../commons/utils/github-auth';

import './sign-in-button.scss';

class SignInButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signinURL: generateSignInURL()
    };
  }

  render() {
    return (
      <a href={this.state.signinURL} target="_blank" rel="noopener noreferrer" className="sign-in-button">
        <i className="fa fa-github"></i> Sign in
      </a>
    );
  }
}

export default SignInButton;
