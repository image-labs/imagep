import React from 'react';
import { get } from 'lodash';

import Panel from '../panel/panel';
import AddLibInput from '../add-lib-input/add-lib-input';

import './function-details-panel.scss';
import { isActive } from '../../commons/utils/axios';

class FunctionDetailsPanel extends Panel {
  onSave(event) {
    event.stopPropagation();
    this.props.actions.save(this.props.currentUser).then(this.props.afterSave);
  }
  toggleStarred(event) {
    event.stopPropagation();
    if(this.props.details.gitHubURL) {
      this.props.actions.toggleStarred();
    }
  }

  render() {
    const isSaved = this.props.details.gitHubURL;
    const isSignedIn = get(this, "props.currentUser.name");

    let starComponent;
    if(isActive(this.props.details.isStarred)) {
      starComponent = <i className="fa fa-spinner fa-spin"></i>;
    } else if (this.props.details.isStarred) {
      starComponent = <i title="Unstar current function" className={"fa fa-star " + (isSaved && "active")}
          onClick={event => this.toggleStarred(event)}></i>
    } else {
      starComponent = <i title="Star current function" className={"fa fa-star-o " + (isSaved && "active")}
          onClick={event => this.toggleStarred(event)}></i>
    }

    return (
      <div className={this.collateClassNames("function-details-panel")}>
        <div className="panel-header" onClick={this.toggleMinMax}>
          <div className="panel-header-body">
            <span className="panel-name">
              <span className="icon-container">
                <i className="fa fa-chevron-down min-max-icon" aria-hidden="true"></i>
              </span>
              {this.props.details.name}
            </span>
            <span className="library-count badge badge-secondary" title="Libraries used">
              {this.props.details.libs.length}
            </span>
          </div>
          <span className="panel-controls">
            <a title="Open in GitHub" target="_blank" rel="noopener noreferrer"
                href={this.props.details.gitHubURL}
                className={"fa fa-github" + (isSaved ? " active" : "")}
                onClick={event => event.stopPropagation()}>
            </a>
            {starComponent}
            <i className={"fa fa-save" + (isSignedIn ? " active" : "")} title="Save Function" onClick={event => this.onSave(event)} aria-hidden="true"></i>
          </span>
        </div>

        <div className="panel-body">

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
            </div>
            <input type="test"
                value={this.props.details.name}
                onChange={event => this.props.actions.setName(event.target.value)}
                className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                {this.props.details.owner && (
                  <a target="_blank" rel="noopener noreferrer" className="avatar"
                      title={`Author : ${this.props.details.owner.login}`}
                      href={this.props.details.owner.profileURL}>
                    <img alt="" src={this.props.details.owner.avatarURL + "s=40"} height="36" width="36"></img>
                  </a>
                )}
          </div>

          {this.props.details.libs.map(libURL => (
            <div className="input-group mb-3" key={libURL}>
              <input value={libURL} readOnly type="text" className="form-control"/>
              <div className="input-group-append">
                <button className="btn btn-outline-danger" type="button"
                    onClick={event => this.props.actions.removeLib(libURL)}>
                  <i className="fa fa-minus" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          ), this)}

          <AddLibInput libs={this.props.details.libs} actions={this.props.actions}/>
        </div>

      </div>
    );
  }
}

export default FunctionDetailsPanel;
