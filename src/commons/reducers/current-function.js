import { createReducer, func } from 'xreducer';
import axios from 'axios';
import updateHelper from 'immutability-helper';

import LIBRARIES from '../../configs/libraries';

function loadFunction(actions, id) {
  actions.setLoading();
  return axios.get(`gists/${id}`)
    .then(resp => {
      const data = resp.data;
      actions.set(data);
      return resp;
    })
    .catch(error => {
      actions.reset();
      throw error;
    });
}

const DEFAULT_NAME = "Untitled function";
const INITIAL_STATE = {
  details: {
    name: DEFAULT_NAME,
    libs: [LIBRARIES[0]],
    isStarred: false
  },
  inputs: [],
  statements: ""
};

let update = function () {
  console.log(arguments);
  return updateHelper.apply(window, arguments);
};

const currentFunctionReducer = createReducer({
  set: (state, payload) => payload,
  setName: (state, payload) => update(state, {
    details: {name: {$set: payload}}
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
  reset: () => null,

  load: func(loadFunction)
}, INITIAL_STATE);

export default currentFunctionReducer;