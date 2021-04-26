import { TypeTask } from '../types';
import { DispatchForm } from './typesTS';

export const setDropDown = () => (dispatch: DispatchForm): void => {
  dispatch({
    type: TypeTask.DROPDOWN_FORM
  });
};

export const handleChange = (event: React.SyntheticEvent) => (
  dispatch: DispatchForm
): void => {
  dispatch({
    type: TypeTask.SETCONTROL_FORM,
    payload: event
  });
};

export const setPriorityTask = () => (dispatch: DispatchForm): void => {
  dispatch({
    type: TypeTask.SETPRIORITY_TASK
  });
};

export const clearAll = () => (dispatch: DispatchForm): void => {
  dispatch({
    type: TypeTask.CLEAR_FORM
  });
};
