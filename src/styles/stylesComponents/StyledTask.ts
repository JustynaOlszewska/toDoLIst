import styled from 'styled-components';
import { Priority } from '../../styles/dry/Priority';

interface DateProps {
  readonly date?: boolean;
}

export const StyledIcon = styled.i`
  ${Priority}
`;

export const StyledLi = styled.li`
  margin: 10px;
`;

export const StyledSpan = styled.span<DateProps>`
  cursor: ${({ date }) => !date && 'pointer'};
  word-wrap: break-word;
  display: inline-block;
  width: 60%;
  text-align: center;
`;
