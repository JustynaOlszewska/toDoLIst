import styled from 'styled-components';
import { Priority } from '../../styles/dry/Priority';

export const StyledIcon = styled.i`
  ${Priority}
`;

export const StyledLi = styled.li`
  margin: 10px;
`;

export const StyledSpan = styled.span`
  cursor: ${({ date }: string) => !date && 'pointer'};
  word-wrap: break-word;
  display: inline-block;
  width: 60%;
  text-align: center;
`;
