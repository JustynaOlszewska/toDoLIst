import { TypeTask } from '../../actions/types';
import { AlertState, ActionsAlert } from './typesTS';

const initialState: AlertState = {
  alert: null
};

const alertReducer = (
  state: AlertState = initialState,
  action: ActionsAlert
): AlertState => {
  switch (action.type) {
    case TypeTask.SET_ALERT:
      return {
        ...state,
        alert: action.payload
      };

    case TypeTask.REMOVE_ALERT:
      return {
        ...state,
        alert: null
      };

    default:
      return state;
  }
};

export default alertReducer;
