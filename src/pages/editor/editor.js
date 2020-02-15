import React from 'react';
import { generatePath } from "react-router";
import { connect } from 'react-redux';

import { STATUS_TYPES } from '../../commons/utils/axios';
import Panel from '../../components/panel/panel';
import Code from '../../components/code/code';
import FunctionDetailsPanel from '../../components/function-details-panel/function-details-panel';
import Message from '../../components/message/message';
import VSpliter from '../../components/v-splitter/v-splitter';

import CurrentFunctionReducer from '../../reducers/current-function';

import './editor.scss';

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.afterSave = this.afterSave.bind(this);
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

  afterSave(data) {
    if(this.props.match.params.id !== data.id) {
      this.props.history.push({
          pathname: generatePath(this.props.match.path, {id: data.id})
      });
    }
  }

  render() {
    const currentFunction = this.props.currentFunction;
    const actions = this.props.currentFunctionActions;

    if(currentFunction.ajax) {
      switch(currentFunction.ajax.status) {
        case STATUS_TYPES.LOADING:
        case STATUS_TYPES.SAVING:
          return <Message icon="fa-2x fa-spinner fa-spin"
              body={`${currentFunction.ajax.message}...`}/>
        case STATUS_TYPES.LOADING_ERROR:
          return <Message icon="fa-2x fa-exclamation-triangle"
              body={`${currentFunction.ajax.message}!`}
              actions={(<a href="/#/" className="btn btn-primary btn-sm" role="button">New Function</a>)}/>
        case STATUS_TYPES.SAVING_ERROR:
          return <Message icon="fa-2x fa-exclamation-triangle"
              body={`${currentFunction.ajax.message}!`}
              actions={(<button className="btn btn-primary btn-sm" onClick={actions.resetAjax}>Back To Edit</button>)}/>
        default:
      }
    }

    return (
      <div className="editor">
        <FunctionDetailsPanel
            details={currentFunction.details}
            actions={actions}
            afterSave={this.afterSave}
            currentUser={this.props.currentUser}
            isMinimized={true}/>

        <div className="editor-body">
          <VSpliter left={(
            <div className="left-panels">
              <Panel title="Input" controls={<i className="fa fa-plus add-image" aria-hidden="true"></i>}>
                <div className="image-panel"></div>
              </Panel>
              <Panel title="Result" minimizable={false}>
                <div className="image-panel"></div>
              </Panel>
            </div>
          )} right={(
            <div className="right-panels">
              <Code value={currentFunction.statements}
                  onChange={value => actions.setStatements(value)}/>
            </div>
          )}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ currentFunction: state.currentFunction, currentUser: state.currentUser });
const mapDispatchToProps = dispatch => ({ currentFunctionActions: CurrentFunctionReducer.getActions(dispatch) });
export default connect(mapStateToProps, mapDispatchToProps)(Editor);
