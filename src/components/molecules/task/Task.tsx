import React, { lazy, useState } from 'react';
import { connect } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import Message from 'materialize-css/dist/js/materialize.min.js';
import {
  StyledIcon,
  StyledLi,
  StyledSpan
} from '../../../styles/stylesComponents/StyledTask';
import { deleteTask } from '../../../actions/taskAction/taskActions';
import { TaskProps } from './typesTS';
const Button = lazy(() => import('../../atom/button/Button'));
const DescriptionTask = lazy(
  () => import('../../atom/descriptionTask/DescriptionTask')
);

const Task: React.FC<TaskProps> = ({ task, deleteTask }) => {
  const [dropDownList, setDropDownList] = useState<boolean>(false);

  const { id, text, date, priority, textArea } = task;

  const handleDelete = (): void => {
    deleteTask(id);
    Message.toast({ html: 'Task deleted' });
  };

  const dropDownDescription = (): void => {
    setDropDownList(!dropDownList);
  };

  return (
    <>
      <StyledLi>
        <Button handleClick={handleDelete} type="reset" task="delete" />
        <StyledSpan onClick={dropDownDescription}>Task name: {text}</StyledSpan>
        <StyledSpan date>Added: {date}</StyledSpan>
        <StyledIcon priority={priority} className="fas fa-eye">
          Priority
        </StyledIcon>
        <DescriptionTask dropDownList={dropDownList} description={textArea} />
      </StyledLi>
      <hr style={{ width: '90%' }} />
    </>
  );
};

export default connect(null, { deleteTask })(Task);
