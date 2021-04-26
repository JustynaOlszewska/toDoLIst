import { TaskDetails } from '../../components/organism/taskList/typesTS';

export interface TaskApi {
  url: string;
  method: string | undefined;
  type: string;
  typeError: string;
  body?: Omit<TaskDetails, 'id'> | number | null;
}

export interface SetTask {
  type: string;
  payload?: Omit<TaskDetails, 'id'> | number;
}
