import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from '../../styles/stylesComponents/StyledButton';

const Button = ({ handleClick, type = 'button', task }) => (
  <StyledButton task={task} type={type} onClick={handleClick}>
    {task}
  </StyledButton>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired
};

export default Button;
