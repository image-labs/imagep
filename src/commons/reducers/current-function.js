import { createReducer, func } from 'xreducer';
import axios, { CancelToken } from 'axios';
import updateHelper from 'immutability-helper';

import { getErrorMsg } from '../../commons/utils/axios';

import LIBRARIES from '../../configs/libraries';

let loadSource = CancelToken.source();
function loadFunction(actions, getReducerState, id) {
  loadSource.cancel();
  loadSource = CancelToken.source();

  actions.setLoading();
  return axios.get(`gists/${id}`, {
    cancelToken: loadSource.token
  }).then(resp => {
    const data = resp.data;
    actions.set(data);
    return resp;
  })
  .catch(error => {
    if (!axios.isCancel(error)) {
      actions.setErrorMsg(getErrorMsg(error));
    }
    console.log(error);
    throw error;
  });
}

function saveFunction(actions, getReducerState) {

}

const DEFAULT_NAME = "Untitled function";
const INITIAL_STATE = {
  details: {
    id: undefined,
    name: DEFAULT_NAME,
    owner: undefined,
    language: "JS",

    isStarred: false,

    libs: [LIBRARIES[0]],
  },
  inputs: [],
  statements: ""
};

// let update = function () {
//   console.log(arguments);
//   return updateHelper.apply(window, arguments);
// };
let update = updateHelper;

const currentFunctionReducer = createReducer({
  set: (state, payload) => payload,

  setName: (state, payload) => update(state, {
    details: {name: {$set: payload}}
  }),

  setStatements: (state, payload) => update(state, {
    statements: {$set: payload}
  }),

  addLib: (state, payload) => update(state, {
    details: {libs: {$push: [payload]}}
  }),
  removeLib: (state, payload) => update(state, {
    details: {
      libs: arr => arr.filter(item => item !== payload)
    }
  }),

  setLoading: () => ({ isLoading: true }),
  setErrorMsg: (state, payload) => ({ errorMsg: payload }),
  reset: () => INITIAL_STATE,

  load: func(loadFunction),
  save: func(saveFunction),

}, INITIAL_STATE);

export default currentFunctionReducer;

export {
  DEFAULT_NAME
};