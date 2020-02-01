import React from 'react';

import Panel from '../panel/panel';
import AddLibInput from '../add-lib-input/add-lib-input';

import './function-details-panel.scss';

class EditorHeaderPanel extends Panel {
  render() {
    return (
      <div className={this.collateClassNames("function-details-panel")}>
        <div className="panel-header" onClick={this.toggleMinMax}>
          <span className="panel-name">
            <span className="icon-container">
              <i className="fa fa-chevron-down min-max-icon" aria-hidden="true"></i>
            </span>
            {this.props.details.name}
            <span className="badge badge-secondary" title="Libraries used">
              {this.props.details.libs.length}
            </span>
          </span>
          <span className="panel-controls">
            <i className="fa fa-star-o" aria-hidden="true"></i>
            <i className="fa fa-save" aria-hidden="true"></i>
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

export default EditorHeaderPanel;
