import React, { lazy } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  StyledInputs,
  StyledForm,
  StyledTextArea,
  StyledIcon
} from '../../styles/stylesComponents/StyledForm';
import { setAlert } from '../../actions/alertAction';
import { addTask, getTasks } from '../../actions/fetchActions';
import {
  setDropDown,
  handleChange,
  clearAll,
  setPriorityTask
} from '../../actions/formActions';
const Button = lazy(() => import('../atom/Button'));

const Form = ({
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
  type
}) => {
  const { text, date, textArea } = value;

  const handleSubmit = event => {
    event.preventDefault();
    if (text === '' || date === '' || textArea === '') {
      setAlert('fill all fields, please');
      return;
    }
    addTask({ ...value, priority });
    getTasks();
    clearAll();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Button task='add' handleClick={setDropDown} type={type} />
      <StyledInputs drop={dropDownForm}>
        <label htmlFor='text'>
          Task name
          <input
            type='text'
            maxLength='30'
            id='text'
            value={text}
            name='text'
            onChange={handleChange}
          />
        </label>
        <label htmlFor='date'>
          Date Added
          <input
            type='date'
            id='date'
            value={date}
            name='date'
            onChange={handleChange}
          />
        </label>
        <label htmlFor='area'>
          <StyledTextArea
            id='area'
            maxLength='50'
            cols='30'
            rows='10'
            value={textArea}
            name='textArea'
            onChange={handleChange}
          />
        </label>
        <StyledIcon
          priority={priority}
          className='fas fa-eye'
          onClick={setPriorityTask}
        >
          Priority
        </StyledIcon>
      </StyledInputs>
    </StyledForm>
  );
};

Form.propTypes = {
  setAlert: PropTypes.func,
  addTask: PropTypes.func,
  getTasks: PropTypes.func,
  setDropDown: PropTypes.func,
  handleChange: PropTypes.func,
  setPriorityTask: PropTypes.func,
  clearAll: PropTypes.func,
  value: PropTypes.object,
  priority: PropTypes.bool,
  dropDownForm: PropTypes.bool,
  type: PropTypes.string
};

const mapStateToProps = state => ({
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
