import { css } from 'styled-components';

export const Priority = css`
  color: ${({ priority }) => (priority ? 'red' : 'black')};
`;
