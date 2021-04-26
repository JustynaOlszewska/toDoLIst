import { TaskDetails } from '../taskList/typesTS';

export interface FormProps extends StateProps {
  setAlert: (m: string) => void;
  addTask: (value: Omit<TaskDetails, 'id'>) => Promise<void>;
  getTasks: () => Promise<void>;
  setDropDown: () => void;
  handleChange: (event: React.SyntheticEvent) => void;
  setPriorityTask: () => void;
  clearAll: () => void;
}

export interface StateProps {
  value: Omit<TaskDetails, 'id' | 'priority'>;
  priority: boolean;
  dropDownForm: boolean;
  type?: 'button' | 'submit' | 'reset';
}
