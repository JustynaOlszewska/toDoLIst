import React from 'react';
import { StyledDescription } from '../../styles/stylesComponents/StyledDescription';

type DescriptionTaskProps = {
  dropDownList: boolean;
  description: string;
};

const DescriptionTask: React.FunctionComponent<DescriptionTaskProps> = ({
  dropDownList,
  description
}: DescriptionTaskProps) => (
  <StyledDescription drop={dropDownList}>{description}</StyledDescription>
);

export default DescriptionTask;
