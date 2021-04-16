import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg: string, timeout = 5000) => (
  dispatch: (SetAlert) => void
): void => {
  dispatch({
    type: SET_ALERT,
    payload: msg
  });

  setTimeout((): void => {
    dispatch({
      type: REMOVE_ALERT
    });
  }, timeout);
};
