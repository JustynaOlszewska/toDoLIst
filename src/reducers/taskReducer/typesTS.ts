import { TaskDetails } from '../../components/organism/taskList/typesTS';
import { TypeTask } from '../../actions/types';

export interface TaskState {
  loading: boolean;
  tasks: TaskDetails[];
}

export type ActionsTask =
  | {
      type: typeof TypeTask.ADD_TASK;
      payload: TaskDetails[];
    }
  | { type: typeof TypeTask.DELETE_TASK; payload: number }
  | {
      type: typeof TypeTask.GET_TASKS;
      payload: TaskDetails[];
    }
  | { type: typeof TypeTask.SET_LOADING };
