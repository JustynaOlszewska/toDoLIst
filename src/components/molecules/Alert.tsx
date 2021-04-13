import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyledAlert } from '../../styles/stylesComponents/StyledAlert';

// type AlertProps = {
//   alert: string;
// };

// const Alert: React.FC<AlertProps> = ({ alert }: AlertProps) =>
const Alert = ({ alert }) =>
  alert && (
    <StyledAlert>
      <i className="fas fa-info-circle">{alert}</i>
    </StyledAlert>
  );

Alert.propTypes = {
  alert: PropTypes.string
};
// interface StateProps {
//   alert: string;
// }
const mapStateToProps = ({ alertReducer: { alert } }) => ({
  alert
});
// const connector = connect(mapStateToProps);
// type PropsFromRedux = ConnectedProps<typeof connector>;

// // export default connect<StateProps>mapStateToProps(Alert);
// export default connector(Alert);
export default connect(mapStateToProps)(Alert);
