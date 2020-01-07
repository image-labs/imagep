import React from 'react';

import './panel.scss';

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMinimized: false
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

  render() {
    let panelClassNames = "panel";
    if(this.props.minimizable === false) {
      panelClassNames += " minimize-disabled";
    } else if(this.state.isMinimized) {
      panelClassNames += " minimized";
    }
    return (
      <div className={panelClassNames}>
        <div className="panel-header" onClick={this.toggleMinMax}>
          <span className="panel-name">
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
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
