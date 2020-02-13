import { createReducer, func } from 'xreducer';
import axios from 'axios';

function loadUser(actions) {
  actions.setLoading();
  return axios.get("user")
    .then(resp => {
      const data = resp.data;
      actions.set({
        name: data.name,
        login: data.login,
        avatarURL: data.avatar_url,
        profileURL: data.html_url,
      });
      return resp;
    })
    .catch(error => {
      actions.reset();
      throw error;
    });
}

const currentUserReducer = createReducer({
  set: (state, payload) => payload,
  setLoading: () => ({ isLoading: true }),
  reset: () => null,

  load: func(loadUser)
});

export default currentUserReducer;