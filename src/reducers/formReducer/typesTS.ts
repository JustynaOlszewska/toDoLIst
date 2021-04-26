import { TaskDetails } from '../../components/organism/taskList/typesTS';
import { TypeTask } from '../../actions/types';

export interface FormState {
  type: string;
  dropDownForm: boolean;
  value: Omit<TaskDetails, 'id' | 'priority'>;
  priority: boolean;
}

export type ActionsForm =
  | { type: typeof TypeTask.DROPDOWN_FORM }
  | {
      type: typeof TypeTask.SETCONTROL_FORM;
      payload: {
        target: {
          name: string;
          value: Omit<TaskDetails, 'id' | 'priority'>;
        };
      };
    }
  | { type: typeof TypeTask.SETPRIORITY_TASK }
  | { type: typeof TypeTask.CLEAR_FORM };
