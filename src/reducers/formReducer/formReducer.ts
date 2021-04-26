import { TypeTask } from '../../actions/types';
import { FormState, ActionsForm } from './typesTS';

const initialState: FormState = {
  type: 'button',
  dropDownForm: false,
  value: {
    text: '',
    date: '',
    textArea: ''
  },
  priority: false
};

const formReducer = (
  state: FormState = initialState,
  action: ActionsForm
): FormState => {
  switch (action.type) {
    case TypeTask.DROPDOWN_FORM:
      return {
        ...state,
        dropDownForm: !state.dropDownForm,
        type: 'submit'
      };

    case TypeTask.SETCONTROL_FORM: {
      const { name, value } = action.payload.target;
      return {
        ...state,
        value: {
          ...state.value,
          [name]: value
        }
      };
    }

    case TypeTask.SETPRIORITY_TASK:
      return {
        ...state,
        priority: !state.priority
      };

    case TypeTask.CLEAR_FORM:
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
