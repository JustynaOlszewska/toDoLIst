import { SET_ALERT, REMOVE_ALERT } from './types';

// export const setAlert = (msg: string, timeout: number = 5000) => (
//   dispatch: (type: string, payload: string | undefined) => void
// ) => {
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
