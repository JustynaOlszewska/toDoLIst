import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

type Actions =
  | { type: typeof SET_ALERT; payload: string }
  | { type: typeof REMOVE_ALERT };

interface Alert {
  alert: null | string;
}

const initialState: Alert = {
  alert: null
};

const alertReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload
      };

    case REMOVE_ALERT:
      return {
        ...state,
        alert: null
      };

    default:
      return state;
  }
};

export default alertReducer;
