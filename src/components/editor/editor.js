import React from 'react';

import Panel from '../panel/panel';

import './editor.scss';

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftPanelWidth: 50
    };
  }

  startDrag(moveEventName, endEventName) {
    const that = this;
    const screenSize = window.screen.width;

    function onMouseMove(e) {
      const mouseX = e.clientX || e.touches[0].clientX;
      const leftPanelWidth = (mouseX / screenSize) * 100;
      that.setState({ leftPanelWidth });
    }

    document.addEventListener(moveEventName, onMouseMove);
    document.addEventListener(endEventName, e => {
      document.removeEventListener(moveEventName, onMouseMove);
    });
  }

  render() {
    return (
      <div className="editor">

        <div className="editor-header">
          <span className="header-left">
            <i className="fa fa-star-o" aria-hidden="true"></i>
            Untitled function
          </span>
          <span className="header-right">
            <i className="fa fa-cog" aria-hidden="true"></i>
            <button type="button" className="btn btn-primary btn-sm">
              <i className="fa fa-save" aria-hidden="true"></i> Save
            </button>
          </span>
        </div>

        <div className="editor-body">
          <div className="left-panels" style={{width: this.state.leftPanelWidth + "%"}}>
            <Panel title="Input" controls={<i className="fa fa-plus" aria-hidden="true"></i>}>
              <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Italian Trulli"/>
            </Panel>
            <Panel title="Result" minimizable={false}>
            <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Italian Trulli"/>
            </Panel>
          </div>
          <div className="panel-gutter">
            <div className="gutter-bar"
                onMouseDown={this.startDrag.bind(this, "mousemove", "mouseup")}
                onTouchStart={this.startDrag.bind(this, "touchmove", "touchend")}></div>
          </div>
          <div className="function-code" style={{width: (100 - this.state.leftPanelWidth) + "%"}}></div>
        </div>
      </div>
    );
  }
}

export default Editor;
