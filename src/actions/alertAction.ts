import { SET_ALERT, REMOVE_ALERT } from './types';

type AlertProps = {
  msg?: string;
  timeout?: number;
};

export const setAlert = (msg, timeout = 5000): AlertProps => (
  dispatch: any
) => {
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
