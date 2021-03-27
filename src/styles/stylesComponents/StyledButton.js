import styled from 'styled-components';
import { breakPoints } from '../../styles/breakPoints';

export const StyledButton = styled.button`
  height: 40px;
  width: 60px;
  margin-top: ${props => props.task === 'add' && '10px'};
  cursor: pointer;

  @media (min-width: ${breakPoints.medium}) {
    width: ${props => (props.task === 'delete' ? '20%' : '60%')};
  }
`;
