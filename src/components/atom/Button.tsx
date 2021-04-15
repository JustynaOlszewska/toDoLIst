import React, { ReactNode } from 'react';
import { StyledButton } from '../../styles/stylesComponents/StyledButton';

interface ButtonProps {
  handleClick: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  task: 'add' | 'delete' | undefined;
}

const Button: React.FC<ButtonProps> = ({
  handleClick,
  type = 'button',
  task
}: ButtonProps) => {
  console.log('d', task);
  return (
    <StyledButton type={type} task={task} onClick={handleClick}>
      {task}
    </StyledButton>
  );
};

export default Button;
