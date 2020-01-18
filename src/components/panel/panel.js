import React from 'react';

import './panel.scss';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMinimized: props.isMinimized || false
    };

    this.toggleMinMax = this.toggleMinMax.bind(this);
  }

  toggleMinMax() {
    if(this.props.minimizable !== false) {
      this.setState({
        isMinimized: !this.state.isMinimized
      });
    }
  }

  collateClassNames(panelClassNames) {
    if(this.props.minimizable === false) {
      panelClassNames += " minimize-disabled";
    } else if(this.state.isMinimized) {
      panelClassNames += " minimized";
    }
    return panelClassNames;
  }

  render() {
    let panelClassNames = this.collateClassNames("panel");
    return (
      <div className={panelClassNames}>
        <div className="panel-header" onClick={this.toggleMinMax}>
          <span className="panel-name">
            <span className="icon-container">
              <i className="fa fa-chevron-down min-max-icon" aria-hidden="true"></i>
            </span>
            {this.props.title}
          </span>
          <span className="panel-controls">
            {this.props.controls}
          </span>
        </div>
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Panel;
