import styled from 'styled-components';
import { breakPoints } from '../breakPoints';

export const StyledButton = styled.button`
  height: 40px;
  width: 60px;
  margin-top: ${({ task }: any) => task === 'add' && '10px'};
  cursor: pointer;

  @media (min-width: ${breakPoints.medium}) {
    width: ${({ task }: any) => (task === 'delete' ? '20%' : '60%')};
  }
`;
