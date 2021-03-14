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

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case DROPDOWN_FORM:
      if (
        state.type === 'submit' &&
        Object.values(state.value).some(key => key === '')
      ) {
        return state;
      }
      return {
        ...state,
        dropDownForm: !state.dropDownForm,
        type: 'submit'
      };
    case SETCONTROL_FORM:
      return {
        ...state,
        value: {
          ...state.value,
          [action.payload.target.name]: action.payload.target.value
        }
      };
    case SETPRIORITY_TASK:
      return {
        ...state,
        priority: !state.priority
      };
    case CLEAR_FORM:
      return {
        ...state,
        value: { text: '', date: '', textArea: '' },
        priority: false,
        type: 'button'
      };
    default:
      return state;
  }
};

export default formReducer;
