import { css } from 'styled-components';

export const Transform = css`
  transform: ${({ drop }) => (!drop ? 'scaleY(0)' : 'scaleY(1)')};
  transition: transform 3s;
`;
