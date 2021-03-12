import React, { useEffect, lazy } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyledUl } from '../../styles/stylesComponents/StyledTaskList';
import { getTasks } from '../../actions/fetchActions';
const Task = lazy(() => import('../molecules/Task'));

const TaskList = ({ tasks, loading, getTasks }) => {
  useEffect(() => {
    getTasks();
    //eslint-disable-next-line
  }, []);

  return (
    <StyledUl>
      {!loading &&
        tasks !== null &&
        tasks.map(task => <Task key={task.id} task={task} />)}
    </StyledUl>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array,
  loading: PropTypes.bool,
  getTasks: PropTypes.func
};

const mapStateToProps = state => ({
  tasks: state.fetchReducer.tasks,
  loading: state.fetchReducer.loading
});

export default connect(mapStateToProps, { getTasks })(TaskList);
