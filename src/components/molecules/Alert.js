import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyledAlert } from '../../styles/stylesComponents/StyledAlert';

const Alert = ({ alert }) => (
  <StyledAlert>
    {alert !== null && <i className='fas fa-info-circle'>{alert}</i>}
  </StyledAlert>
);

Alert.propTypes = {
  alert: PropTypes.string
};

const mapStateToProps = state => ({
  alert: state.alertReducer.alert
});

export default connect(mapStateToProps)(Alert);
