import React, { lazy, useState } from 'react';
import { connect } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import {
  StyledIcon,
  StyledLi,
  StyledSpan
} from '../../styles/stylesComponents/StyledTask';
import { deleteTask } from '../../actions/taskActions';
const Button = lazy(() => import('../atom/Button'));
const DescriptionTask = lazy(() => import('../atom/DescriptionTask'));

type TaskProps = {
  task: {
    id: number;
    text: string;
    textArea: string;
    priority: boolean;
    date: string;
  };
  deleteTask: (m: number) => void;
};

const Task: React.FC<TaskProps> = ({ task, deleteTask }) => {
  const [dropDownList, setDropDownList] = useState<boolean>(false);

  const { id, text, date, priority, textArea } = task;

  const handleDelete = (): void => {
    deleteTask(id);
    M.toast({ html: 'Task deleted' });
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
