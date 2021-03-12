import {
  DROPDOWN_FORM,
  SETCONTROL_FORM,
  SETPRIORITY_TASK,
  CLEAR_FORM
} from './types';

export const setDropDown = () => dispatch => {
  dispatch({
    type: DROPDOWN_FORM
  });
};

export const handleChange = event => dispatch => {
  dispatch({
    type: SETCONTROL_FORM,
    payload: event
  });
};

export const setPriorityTask = () => dispatch => {
  dispatch({
    type: SETPRIORITY_TASK
  });
};

export const clearAll = () => dispatch => {
  dispatch({
    type: CLEAR_FORM
  });
};
