import React, { useEffect, lazy } from 'react';
import { connect } from 'react-redux';
import { StyledUl } from '../../../styles/stylesComponents/StyledTaskList';
import { getTasks } from '../../../actions/taskAction/taskActions';
import Spinner from '../../molecules/spinner/Spinner';
import { TaskListProps, StateProps, TaskDetails } from './typesTS';
const Task = lazy(() => import('../../molecules/task/Task'));

const TaskList: React.FC<TaskListProps> = ({ tasks, loading, getTasks }) => {
  useEffect((): void => {
    getTasks();
    //eslint-disable-next-line
  }, []);

  return (
    <StyledUl>
      {loading ? (
        <Spinner />
      ) : (
        tasks &&
        tasks.map((task: TaskDetails) => <Task key={task.id} task={task} />)
      )}
    </StyledUl>
  );
};

const mapStateToProps = (state: { taskReducer: StateProps }) => ({
  tasks: state.taskReducer.tasks,
  loading: state.taskReducer.loading
});

export default connect(mapStateToProps, { getTasks })(TaskList);
