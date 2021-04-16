import {
  DROPDOWN_FORM,
  SETCONTROL_FORM,
  SETPRIORITY_TASK,
  CLEAR_FORM
} from './types';

interface SetForm {
  type: string;
  payload?: React.SyntheticEvent;
}

export const setDropDown = () => (dispatch: (type: SetForm) => void): void => {
  dispatch({
    type: DROPDOWN_FORM
  });
};

export const handleChange = (event: React.SyntheticEvent) => (
  dispatch: (SetForm) => void
): void => {
  dispatch({
    type: SETCONTROL_FORM,
    payload: event
  });
};

export const setPriorityTask = () => (
  dispatch: (type: SetForm) => void
): void => {
  dispatch({
    type: SETPRIORITY_TASK
  });
};

export const clearAll = () => (dispatch: (type: SetForm) => void): void => {
  dispatch({
    type: CLEAR_FORM
  });
};
