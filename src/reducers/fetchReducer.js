import {
  ADD_TASK,
  DELETE_TASK,
  GET_TASKS,
  SET_LOADING
} from '../actions/types';

const initialState = {
  loading: false,
  tasks: null
};

const fetchReducer = (state = initialState, action) => {
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
        tasks: state.tasks.filter(task => task.id !== action.payload),
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

export default fetchReducer;
