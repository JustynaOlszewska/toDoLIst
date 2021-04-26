import { TaskDetails } from '../../organism/taskList/typesTS';

export type TaskProps = {
  task: TaskDetails;
  deleteTask: (id: number) => Promise<void>;
};
