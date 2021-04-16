import styled from 'styled-components';
import { Transform } from '../dry/Transform';
import { BoxShadow } from '../dry/BoxShadow';

export const StyledDescription = styled.p`
  border: 1px solid grey;
  word-wrap: break-word;
  ${Transform}
  ${BoxShadow}
`;
