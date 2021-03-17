import styled from 'styled-components';
import { Transform } from '../../styles/dry/Transform';
import { Flex } from '../../styles/dry/Flex';
import { Priority } from '../../styles/dry/Priority';
import { breakPoints } from '../../styles/breakPoints';

export const StyledInputs = styled.div`
  ${Transform}
  ${Flex}
  height: ${({ drop }) => (!drop ? `0` : `200px`)};
`;
export const StyledForm = styled.form`
  ${Flex}
  width: 90%;

  @media (min-width: ${breakPoints.medium}) {
    width: 80%;
  }
`;

export const StyledTextArea = styled.textarea`
  max-width: 200px;
  max-height: 60px;
`;

export const StyledIcon = styled.i`
  ${Priority}
  cursor: pointer;

  @media (min-width: 1024px) {
    margin-bottom: 10px;
  }
`;
