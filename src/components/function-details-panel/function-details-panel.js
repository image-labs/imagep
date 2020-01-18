import React from 'react';

import Panel from '../panel/panel';
import './function-details-panel.scss';

class EditorHeaderPanel extends Panel {
  render() {
    let panelClassNames = this.collateClassNames("function-details-panel");
    return (
      <div className={panelClassNames}>
        <div className="panel-header" onClick={this.toggleMinMax}>
          <span className="panel-name">
            <span className="icon-container">
              <i className="fa fa-chevron-down min-max-icon" aria-hidden="true"></i>
            </span>
            Untitled function
          </span>
          <span className="panel-controls">
            <i className="fa fa-star-o" aria-hidden="true"></i>
            <i className="fa fa-save" aria-hidden="true"></i>
          </span>
        </div>
        <div className="panel-body">
          Untitled function
        </div>
      </div>
    );
  }
}

export default EditorHeaderPanel;
