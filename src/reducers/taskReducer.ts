import {
  ADD_TASK,
  DELETE_TASK,
  GET_TASKS,
  SET_LOADING
} from '../actions/types';

const initialState = {
  loading: false,
  tasks: []
};

type Actions =
  | {
      type: typeof ADD_TASK;
      payload: [number, string, string, boolean, string];
    }
  | { type: typeof DELETE_TASK; payload: number }
  | {
      type: typeof GET_TASKS;
      payload: [number, string, string, boolean, string];
    }
  | { type: typeof SET_LOADING };

interface InitialState {
  tasks: (string | number | boolean)[] | null;
  loading: boolean;
}

const taskReducer = (state = initialState, action: Actions): InitialState => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload.reverse(),
        loading: false
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, ...action.payload],
        loading: false
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(
          (task: {
            id: number;
            text: string;
            textArea: string;
            priority: boolean;
            date: string;
          }) => task.id !== action.payload
        ),
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};

export default taskReducer;
