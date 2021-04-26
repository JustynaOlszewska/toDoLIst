import { Dispatch } from 'redux';
import { TypeTask } from '../types';
import { TaskDetails } from '../../components/organism/taskList/typesTS';

interface TaskApi {
  url: string;
  method: string | undefined;
  type: string;
  typeError: string;
  body?: Omit<TaskDetails, 'id'> | number | null;
}
interface SetTask {
  type: string;
  payload?: Omit<TaskDetails, 'id'> | number;
}

const taskApi = (url, method = 'GET', type, typeError, body = null) => async (
  dispatch: Dispatch<TaskApi | SetTask>
): Promise<void> => {
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
      payload: method === 'DELETE' ? body : data
    });
  } catch (error) {
    dispatch({
      type: typeError,
      payload: error
    });
  }
};

export const getTasks = () => {
  return taskApi('./tasks', 'GET', TypeTask.GET_TASKS, TypeTask.ERROR_TASK);
};

export const addTask = (value: any) => {
  return taskApi(
    './tasks',
    'POST',
    TypeTask.ADD_TASK,
    TypeTask.ERROR_TASK,
    value
  );
};

export const deleteTask = (id: any) => {
  return taskApi(
    `./tasks/${id}`,
    'DELETE',
    TypeTask.DELETE_TASK,
    TypeTask.ERROR_TASK,
    id
  );
};

export const setLoading = () => ({ type: TypeTask.SET_LOADING });
