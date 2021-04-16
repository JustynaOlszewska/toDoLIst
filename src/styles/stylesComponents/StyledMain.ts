import styled, { css } from 'styled-components';
import { BoxShadow } from '../dry/BoxShadow';
import { breakPoints } from '../breakPoints';

interface PrimaryProps {
  readonly primary?: boolean;
}

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  position: absolute;
  left: 50%;
  top: 3%;
  transform: translate(-50%);
  border-radius: 1%;
  ${BoxShadow}

  @media (min-width: ${breakPoints.medium}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const StyledSection = styled.section<PrimaryProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({ primary }) =>
    primary &&
    css`
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    `}
  @media (min-width: ${breakPoints.medium}) {
    width: ${({ primary }) => (primary ? '40%' : '60%')};
  }
`;

export const StyledH1 = styled.h1`
  align-self: center;
  text-align: center;
`;
