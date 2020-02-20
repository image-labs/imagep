import React from 'react';

import Env from '../../commons/utils/env';

import './v-splitter.scss';

class VSplitter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDragging: false,
      leftPanelWidth: 50
    };

    this.gutterIcon = Env.isTouch ? (
      <span className="gutter-icon">
        <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
        <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
      </span>
    ) : <i className="fa fa-ellipsis-v gutter-icon" aria-hidden="true"></i>;

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

    this.setState({ isDragging: true });
    document.addEventListener("mousemove", onDrag);
    document.addEventListener("mouseup", e => {
      this.setState({ isDragging: false });
      document.removeEventListener("mousemove", onDrag);
    });
  }

  startTouchDrag(e) {
    const xDelta = e.currentTarget.clientWidth - e.touches[0].clientX;
    const onDrag = e => {
      this.setLeftPanelWidth(e.touches[0].clientX + xDelta);
    };

    this.setState({ isDragging: true });
    document.addEventListener("touchmove", onDrag);
    document.addEventListener("touchend", e => {
      this.setState({ isDragging: false });
      document.removeEventListener("touchmove", onDrag);
    });
  }

  render() {
    return (
      <div className={"v-splitter" + (this.state.isDragging ? " is-dragging" : "")}>
        <div className="v-left" style={{width: this.state.leftPanelWidth + "%"}} onTouchStart={this.startTouchDrag}>
          {this.props.left}
        </div>
        <div className="v-gutter">
          <div className="gutter-bar" onMouseDown={this.startMouseDrag}>
            {this.gutterIcon}
          </div>
        </div>
        <div className="v-right" style={{width: (100 - this.state.leftPanelWidth) + "%"}}>
          {this.props.right}
        </div>
      </div>
    );
  }
}

export default VSplitter;
