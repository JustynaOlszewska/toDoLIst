import React from 'react';
import { StyledImg } from '../../../styles/stylesComponents/StyledSpinner';
import spinner from './spinner.gif';

const Spinner: React.FC = () => <StyledImg src={spinner} alt="loading..." />;

export default Spinner;
