import styled from 'styled-components';
import { Transform } from '../../styles/dry/Transform';
import { BoxShadow } from '../../styles/dry/BoxShadow';

export const StyledDescription = styled.p`
  border: 1px solid grey;
  word-wrap: break-word;
  ${Transform}
  ${BoxShadow}
`;
