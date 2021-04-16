import React from 'react';
import { StyledButton } from '../../styles/stylesComponents/StyledButton';

interface ButtonProps {
  handleClick: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  task: string;
}

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
