import React from 'react';
import { connect } from 'react-redux';
import { StyledAlert } from '../../../styles/stylesComponents/StyledAlert';
import { AlertState } from '../../../reducers/alertReducer/typesTS';

const Alert = ({ alert }: AlertState): any =>
  alert && (
    <StyledAlert>
      <i className="fas fa-info-circle">{alert}</i>
    </StyledAlert>
  );

const mapStateToProps = (state: { alertReducer: AlertState }) => ({
  alert: state.alertReducer.alert
});

export default connect(mapStateToProps)(Alert);
