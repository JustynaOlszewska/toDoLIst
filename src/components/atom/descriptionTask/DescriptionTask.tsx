import React from 'react';
import { StyledDescription } from '../../../styles/stylesComponents/StyledDescription';
import { DescriptionTaskProps } from './typesTS';

const DescriptionTask: React.FC<DescriptionTaskProps> = ({
  dropDownList,
  description
}: DescriptionTaskProps) => (
  <StyledDescription drop={dropDownList}>{description}</StyledDescription>
);

export default DescriptionTask;
