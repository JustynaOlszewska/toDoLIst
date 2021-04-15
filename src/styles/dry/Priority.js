import { css } from 'styled-components';

export const Priority = css`
  color: ${({ priority }: any) => (priority ? 'red' : 'black')};
`;
