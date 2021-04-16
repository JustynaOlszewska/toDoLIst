import styled from 'styled-components';
import { breakPoints } from '../breakPoints';

interface TaskProps {
  readonly task: string;
}

export const StyledButton = styled.button<TaskProps>`
  height: 40px;
  width: 60px;
  margin-top: ${({ task }) => task === 'add' && '10px'};
  cursor: pointer;

  @media (min-width: ${breakPoints.medium}) {
    width: ${({ task }) => (task === 'delete' ? '20%' : '60%')};
  }
`;
