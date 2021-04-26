import React from 'react';
import { StyledButton } from '../../../styles/stylesComponents/StyledButton';
import { ButtonProps } from './typesTS';

const Button: React.FC<ButtonProps> = ({
  handleClick,
  type = 'button',
  task
}: ButtonProps) => (
  <StyledButton onClick={handleClick} type={type} task={task}>
    {task}
  </StyledButton>
);

export default Button;
