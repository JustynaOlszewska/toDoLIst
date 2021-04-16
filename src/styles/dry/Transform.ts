import { css } from 'styled-components';

interface DropProps {
  drop: any;
}

export const Transform = css<DropProps>`
  transform: ${({ drop }) => (!drop ? 'scaleY(0)' : 'scaleY(1)')};
  transition: transform 3s;
`;
