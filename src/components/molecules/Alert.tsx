import React from 'react';
import { connect } from 'react-redux';
import { StyledAlert } from '../../styles/stylesComponents/StyledAlert';

interface AlertProps extends StateProps {
  alert: string;
}

const Alert = ({ alert }: AlertProps): any =>
  alert && (
    <StyledAlert>
      <i className="fas fa-info-circle">{alert}</i>
    </StyledAlert>
  );

interface StateProps {
  alert: string;
}

const mapStateToProps = (state: any): StateProps => ({
  alert: state.alertReducer.alert
});

export default connect(mapStateToProps)(Alert);
