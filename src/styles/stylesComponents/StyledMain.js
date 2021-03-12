import styled from 'styled-components';
import { BoxShadow } from '../../styles/dry/BoxShadow';
import { breakPoints } from '../../styles/breakPoints';

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  position: absolute;
  left: 50%;
  top: 3%;
  transform: translate(-50%);
  ${BoxShadow}
  @media(min-width: ${breakPoints.medium}) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const StyledSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${({ primary }) => !primary && 'column'};
  align-items: flex-start;
  justify-content: ${({ primary }) => primary && 'center'};
  flex-wrap: ${({ primary }) => (primary ? 'wrap' : 'no-wrap')};
  @media (min-width: ${breakPoints.medium}) {
    width: ${({ primary }) => (primary ? '40%' : '60%')};
  }
`;

export const StyledH1 = styled.h1`
  align-self: center;
  text-align: center;
`;