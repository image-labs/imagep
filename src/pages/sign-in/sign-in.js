import React from 'react';

import Message from '../../components/message/message';

import { signIn } from '../../commons/utils/github-auth';

import './sign-in.scss';

const AUTH_STATUS = {
  IN_PROGRESS:  Symbol("in-progress"),
  SUCCESS:  Symbol("success"),
  FAILURE:  Symbol("failure"),
};

class SignIn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      signInStatus: AUTH_STATUS.IN_PROGRESS
    };
    this.init(props);
  }

  init(props) {
    let params = (new URLSearchParams(window.location.search));
    signIn(params.get("code"), params.get("state"))
    .then(auth => {
      this.setSignInStatus(AUTH_STATUS.SUCCESS);
      window.open('','_self').close();
    })
    .catch(() => {
      this.setSignInStatus(AUTH_STATUS.FAILURE);
    });
  }

  setSignInStatus(state) {
    this.setState({
      signInStatus: state
    });
  }

  getMessage(authStatus) {
    switch(authStatus) {
      case AUTH_STATUS.IN_PROGRESS:
        return (
          <div>
            <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
            Signing into GitHub...
          </div>
        );

      case AUTH_STATUS.SUCCESS:
        return (
          <div className="alert alert-success">
            <i className="fa fa-check-circle-o" aria-hidden="true"></i>
            Signed into GitHub successfully!
          </div>
        );

      case AUTH_STATUS.FAILURE:
        return (
          <div className="alert alert-danger">
            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
            Signing into GitHub failed!
          </div>
        );

      default:
        return (
          <div className="alert alert-info">
            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
            Not signed into GitHub!
          </div>
        );
    }
  }

  render() {
    const message = this.getMessage(this.state.signInStatus);
    return <Message className="sign-in" icon="fa-5x fa-github" body={message}/>
  }

}

export default SignIn;
