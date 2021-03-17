import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

export const setAlert = (msg, timeout = 5000) => dispatch => {
  dispatch({
    type: SET_ALERT,
    payload: msg
  });

  setTimeout(() => {
    dispatch({
      type: REMOVE_ALERT
    });
  }, timeout);
};
