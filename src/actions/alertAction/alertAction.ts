import { TypeTask } from '../types';
import { DispatchAlert } from './typesTS';

export const setAlert = (msg: string, timeout = 5000) => (
  dispatch: DispatchAlert
): void => {
  dispatch({
    type: TypeTask.SET_ALERT,
    payload: msg
  });

  setTimeout((): void => {
    dispatch({
      type: TypeTask.REMOVE_ALERT
    });
  }, timeout);
};
