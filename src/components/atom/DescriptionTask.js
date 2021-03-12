import React from 'react';
import PropTypes from 'prop-types';
import { StyledDescription } from '../../styles/stylesComponents/StyledDescription';

const DescriptionTask = ({ dropDownList, description }) => (
  <StyledDescription drop={dropDownList}>{description}</StyledDescription>
);

DescriptionTask.propTypes = {
  dropDownList: PropTypes.bool,
  description: PropTypes.string.isRequired
};

export default DescriptionTask;
