import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  SET_LOADING,
  ERROR_TASK
} from '../actions/types';

const api = (
  url,
  method = 'get',
  type,
  typeError,
  body = null
) => async dispatch => {
  try {
    setLoading();
    const res = await fetch(url, {
      method: method,
      body: method === 'POST' ? JSON.stringify(body) : null,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    dispatch({
      type: type,
      payload: method === 'DELETE' ? body.id : data
    });
  } catch (error) {
    dispatch({
      type: typeError,
      payload: error
    });
  }
};

export const getTasks = () => {
  return api('./tasks', 'GET', GET_TASKS, ERROR_TASK);
};

export const addTask = value => {
  return api('./tasks', 'POST', ADD_TASK, ERROR_TASK, value);
};

export const deleteTask = id => {
  return api(`./tasks/${id}`, 'DELETE', DELETE_TASK, ERROR_TASK, { id });
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
