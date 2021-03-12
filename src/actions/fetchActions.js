import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  SET_LOADING,
  ERROR_TASK
} from '../actions/types';

export const getTasks = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('./tasks');
    const data = await res.json();
    dispatch({
      type: GET_TASKS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ERROR_TASK,
      payload: error
    });
  }
};

export const addTask = value => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/tasks', {
      method: 'POST',
      body: JSON.stringify(value),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    dispatch({
      type: ADD_TASK,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ERROR_TASK,
      payload: error
    });
  }
};

export const deleteTask = id => async dispatch => {
  try {
    setLoading();
    await fetch(`/tasks/${id}`, {
      method: 'DELETE'
    });

    dispatch({
      type: DELETE_TASK,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: ERROR_TASK,
      payload: err.response.statusText
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
