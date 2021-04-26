import { TypeTask } from '../../actions/types';
import { TaskDetails } from '../../components/organism/taskList/typesTS';
import { TaskState, ActionsTask } from './typesTS';

const initialState: TaskState = {
  loading: false,
  tasks: []
};

const taskReducer = (
  state: TaskState = initialState,
  action: ActionsTask
): TaskState => {
  switch (action.type) {
    case TypeTask.GET_TASKS:
      return {
        ...state,
        tasks: action.payload.reverse(),
        loading: false
      };

    case TypeTask.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, ...action.payload],
        loading: false
      };

    case TypeTask.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(
          (task: TaskDetails) => task.id !== action.payload
        ),
        loading: false
      };

    case TypeTask.SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

export default taskReducer;
