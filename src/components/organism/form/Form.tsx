import React, { lazy } from 'react';
import { connect } from 'react-redux';
import {
  StyledInputs,
  StyledForm,
  StyledTextArea,
  StyledIcon
} from '../../../styles/stylesComponents/StyledForm';
import { setAlert } from '../../../actions/alertAction/alertAction';
import { addTask, getTasks } from '../../../actions/taskAction/taskActions';
import {
  setDropDown,
  handleChange,
  clearAll,
  setPriorityTask
} from '../../../actions/formAction/formActions';
import { FormProps, StateProps } from './typesTS';
const Button = lazy(() => import('../../atom/button/Button'));

const Form: React.FC<FormProps> = ({
  setAlert,
  addTask,
  getTasks,
  setDropDown,
  handleChange,
  setPriorityTask,
  clearAll,
  value,
  priority,
  dropDownForm,
  type = 'button'
}) => {
  const { text, date, textArea } = value;

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    if (text === '' || date === '' || textArea === '') {
      setAlert('fill all fields, please');
      return;
    }
    addTask({ ...value, priority });
    getTasks();
    clearAll();
  };

  const dropDown = (): void => {
    if (type === 'submit' && Object.values(value).some(key => key === '')) {
      return;
    }
    return setDropDown();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Button handleClick={dropDown} type={type} task="add" />
      <StyledInputs drop={dropDownForm}>
        <label htmlFor="text">
          Task name
          <input
            type="text"
            maxLength={30}
            id="text"
            value={text}
            name="text"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="date">
          Date Added
          <input
            type="date"
            id="date"
            value={date}
            name="date"
            onChange={handleChange}
          />
        </label>
        <label htmlFor="area">
          <StyledTextArea
            id="area"
            maxLength={50}
            cols={30}
            rows={10}
            value={textArea}
            name="textArea"
            onChange={handleChange}
          />
        </label>
        <StyledIcon
          priority={priority}
          className="fas fa-eye"
          onClick={setPriorityTask}
        >
          Priority
        </StyledIcon>
      </StyledInputs>
    </StyledForm>
  );
};

const mapStateToProps = (state: any): StateProps => ({
  value: state.formReducer.value,
  priority: state.formReducer.priority,
  dropDownForm: state.formReducer.dropDownForm,
  type: state.formReducer.type
});

export default connect(mapStateToProps, {
  setAlert,
  addTask,
  setDropDown,
  handleChange,
  clearAll,
  setPriorityTask,
  getTasks
})(Form);
