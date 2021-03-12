import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from '../../styles/stylesComponents/StyledButton';

const Button = ({ handleClick, type, task }) => (
  <StyledButton task={task} type={type} onClick={handleClick}>
    {task}
  </StyledButton>
);

Button.propTypes = {
  handleClick: PropTypes.func,
  type: PropTypes.string,
  task: PropTypes.string
};

export default Button;
