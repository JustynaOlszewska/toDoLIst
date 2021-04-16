import { css } from 'styled-components';

interface PriorityProps {
  readonly priority: boolean;
}
export const Priority = css<PriorityProps>`
  color: ${({ priority }) => (priority ? 'red' : 'black')};
`;
