import React from 'react';

import { connect } from 'react-redux';

import Panel from '../panel/panel';
import Code from '../code/code';
import FunctionDetailsPanel from '../function-details-panel/function-details-panel';
import Message from '../message/message';

import CurrentFunctionReducer from '../../commons/reducers/current-function';

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

  initCurrentFunction() {
    const currentFunctionId = this.props.match.params.id;
    if(currentFunctionId) {
      this.props.currentFunctionActions.load(currentFunctionId);
    } else {
      this.props.currentFunctionActions.reset();
    }
  }

  componentDidMount() {
    this.initCurrentFunction();
  }

  componentDidUpdate(prevProps) {
    if(this.props.match.params.id !== prevProps.match.params.id) {
      this.initCurrentFunction();
    }
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
    const currentFunction = this.props.currentFunction;
    const currentFunctionActions = this.props.currentFunctionActions;

    if(currentFunction.isLoading) {
      return <Message icon="fa-2x fa-spinner fa-spin" body="Loading function..."/>
    } else if(currentFunction.errorMsg) {
      return <Message icon="fa-2x fa-exclamation-triangle"
          body={currentFunction.errorMsg + "!"}
          actions={(<a href="/#/" className="btn btn-primary btn-sm" role="button">New Function</a>)}/>
    }

    return (
      <div className="editor">

        <FunctionDetailsPanel
            details={currentFunction.details}
            actions={currentFunctionActions}
            isMinimized={true}/>

        <div className="editor-body">
          <div className="left-panels"
              style={{width: this.state.leftPanelWidth + "%"}}
              onTouchStart={this.startTouchDrag}>
            <Panel title="Input" controls={<i className="fa fa-plus" aria-hidden="true"></i>}>
              <img src="/logo512.png" alt="Italian Trulli"/>
            </Panel>
            <Panel title="Result" minimizable={false}>
            <img src="/logo512.png" alt="Italian Trulli"/>
            </Panel>
          </div>
          <div className="panel-gutter">
            <div className="gutter-bar" onMouseDown={this.startMouseDrag}>
              <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
            </div>
          </div>
          <div className="function-code" style={{width: (100 - this.state.leftPanelWidth) + "%"}}>
            <Code value={currentFunction.statements}
                onChange={value => currentFunctionActions.setStatements(value)}/>
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({ currentFunction: state.currentFunction });
const mapDispatchToProps = dispatch => ({ currentFunctionActions: CurrentFunctionReducer.getActions(dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(Editor);
