import {
  DROPDOWN_FORM,
  SETCONTROL_FORM,
  SETPRIORITY_TASK,
  CLEAR_FORM
} from '../actions/types';

const initialState = {
  type: 'button',
  dropDownForm: false,
  value: {
    text: '',
    date: '',
    textArea: ''
  },
  priority: false
};

interface InitialState {
  type: string;
  dropDownForm: boolean;
  value: {
    text: string;
    date: string;
    textArea: string;
  };
  priority: boolean;
}

type Actions =
  | { type: typeof DROPDOWN_FORM }
  | {
      type: typeof SETCONTROL_FORM;
      payload: {
        target: {
          name: string;
          value: {
            text: string;
            date: string;
            textArea: string;
          };
        };
      };
    }
  | { type: typeof SETPRIORITY_TASK }
  | { type: typeof CLEAR_FORM };

const formReducer = (state = initialState, action: Actions): InitialState => {
  switch (action.type) {
    case DROPDOWN_FORM:
      return {
        ...state,
        dropDownForm: !state.dropDownForm,
        type: 'submit'
      };

    case SETCONTROL_FORM: {
      const { name, value } = action.payload.target;
      return {
        ...state,
        value: {
          ...state.value,
          [name]: value
        }
      };
    }

    case SETPRIORITY_TASK:
      return {
        ...state,
        priority: !state.priority
      };

    case CLEAR_FORM:
      return {
        ...state,
        value: initialState.value,
        priority: false,
        type: 'button'
      };

    default:
      return state;
  }
};

export default formReducer;
