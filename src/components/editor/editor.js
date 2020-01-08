import React from 'react';

import Panel from '../panel/panel';
import Code from '../code/code';

import './editor.scss';

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftPanelWidth: 50
    };

    this.startMouseDrag = this.startMouseDrag.bind(this);
    this.startTouchDrag = this.startTouchDrag.bind(this);
  }

  setLeftPanelWidth(pxWidth) {
    const leftPanelWidth = (pxWidth / window.screen.width) * 100;
    this.setState({ leftPanelWidth });
  }

  startMouseDrag() {
    const onDrag = e => {
      this.setLeftPanelWidth(e.clientX);
    };

    document.addEventListener("mousemove", onDrag);
    document.addEventListener("mouseup", e => {
      document.removeEventListener("mousemove", onDrag);
    });
  }

  startTouchDrag(e) {
    if(window.innerHeight < window.innerWidth){
      const xDelta = e.currentTarget.clientWidth - e.touches[0].clientX;
      const onDrag = e => {
        this.setLeftPanelWidth(e.touches[0].clientX + xDelta);
      };

      document.addEventListener("touchmove", onDrag);
      document.addEventListener("touchend", e => {
        document.removeEventListener("touchmove", onDrag);
      });
    }
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
          <div className="left-panels"
              style={{width: this.state.leftPanelWidth + "%"}}
              onTouchStart={this.startTouchDrag}>
            <Panel title="Input" controls={<i className="fa fa-plus" aria-hidden="true"></i>}>
              <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Italian Trulli"/>
            </Panel>
            <Panel title="Result" minimizable={false}>
            <img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Italian Trulli"/>
            </Panel>
          </div>
          <div className="panel-gutter">
            <div className="gutter-bar" onMouseDown={this.startMouseDrag}></div>
          </div>
          <div className="function-code" style={{width: (100 - this.state.leftPanelWidth) + "%"}}>
            <Code value="var x=1;"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
