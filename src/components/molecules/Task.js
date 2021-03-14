import React, { lazy, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import {
  StyledIcon,
  StyledLi,
  StyledSpan
} from '../../styles/stylesComponents/StyledTask';
import { deleteTask } from '../../actions/fetchActions';
const Button = lazy(() => import('../atom/Button'));
const DescriptionTask = lazy(() => import('../atom/DescriptionTask'));

const Task = ({ task, deleteTask }) => {
  const [dropDownList, setDropDownList] = useState(false);
  const { id, text, date, priority, textArea } = task;
  const handleDelete = () => {
    deleteTask(id);
    M.toast({ html: 'Task deleted' });
  };

  const dropDownDescription = () => {
    setDropDownList(!dropDownList);
  };
  return (
    <>
      <StyledLi>
        <Button task='delete' handleClick={handleDelete} />
        <StyledSpan onClick={dropDownDescription}>Task name: {text}</StyledSpan>
        <StyledSpan date>Added: {date}</StyledSpan>
        <StyledIcon priority={priority} className='fas fa-eye'>
          Priority
        </StyledIcon>
        <DescriptionTask dropDownList={dropDownList} description={textArea} />
      </StyledLi>
      <hr />
    </>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  deleteTask: PropTypes.func
};

export default connect(null, { deleteTask })(Task);
