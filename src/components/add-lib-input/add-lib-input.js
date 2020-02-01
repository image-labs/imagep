import React from 'react';
import memoize from 'memoize-one';

import LIBRARIES from '../../configs/libraries';

import './add-lib-input.scss';

class AddLibInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      libURL: "",
      message: "",
    };
  }

  getUnusedLibs = memoize(libs => LIBRARIES.filter(lib => !libs.includes(lib)));

  setLibURL(url) {
    this.setState({
      libURL: url,
      message: ""
    });
  }

  addLibURL() {
    if(this.props.libs.includes(this.state.libURL)) {
      this.setState({
        message: `${this.state.libURL} is already added!`
      });
    } else {
      this.props.actions.addLib(this.state.libURL);
      this.setLibURL("");
    }
  }

  render() {
    let unusedLibs = this.getUnusedLibs(this.props.libs);
    return (
      <div className="add-lib-input input-group mb-3">
        <input type="search" list="libraries-list" placeholder="Add another library. Select from the list or type in a custom URL!"
            className={"form-control " + (this.state.message ? "is-invalid" : "")}
            value={this.state.libURL}
            onChange={event => this.setLibURL(event.target.value)}/>
        <datalist id="libraries-list">
          {unusedLibs.map(lib => (
            <option value={lib} key={lib}/>
          ))}
        </datalist>

        <div className="invalid-feedback order-last">
          {this.state.message}
        </div>

        <div className="input-group-append">
          <button className="btn btn-outline-success" type="button"
              disabled={!this.state.libURL}
              onClick = {event => this.addLibURL()}>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default AddLibInput;
