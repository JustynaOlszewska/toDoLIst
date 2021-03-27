import React from 'react';
import { StyledButton } from '../../styles/stylesComponents/StyledButton';

type ButtonProps = {
  handleClick: () => void;
  task: string;
  type?: string;
};

const Button = ({ handleClick, type = 'button', task }: ButtonProps) => (
  <StyledButton task={task} type={type} onClick={handleClick}>
    {task}
  </StyledButton>
);

export default Button;
