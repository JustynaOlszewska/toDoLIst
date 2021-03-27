import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { StyledAlert } from '../../styles/stylesComponents/StyledAlert';

// type AlertProps = {
//   alert: string;
// };

const Alert = ({ alert }) =>
  alert && (
    <StyledAlert>
      <i className="fas fa-info-circle">{alert}</i>
    </StyledAlert>
  );

// Alert.propTypes = {
//   alert: PropTypes.string
// };

const mapStateToProps = ({ alertReducer: { alert } }) => ({
  alert
});

export default connect(mapStateToProps)(Alert);
