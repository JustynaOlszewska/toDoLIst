import React, { useEffect, lazy } from 'react';
import { connect } from 'react-redux';
import { StyledUl } from '../../styles/stylesComponents/StyledTaskList';
import { getTasks } from '../../actions/taskActions';
import Spinner from '../molecules/spinner/Spinner';
const Task = lazy(() => import('../molecules/Task'));

interface TaskListProps extends StateProps {
  tasks: [];
  loading: boolean;
  getTasks: () => any;
}

interface Task {
  id: number;
}

const TaskList = ({ tasks, loading, getTasks }: TaskListProps) => {
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
        tasks.map(
          (task: {
            id: number;
            text: string;
            textArea: string;
            priority: boolean;
            date: string;
          }) => <Task key={task.id} task={task} />
        )
      )}
    </StyledUl>
  );
};

interface StateProps {
  tasks: [];
  loading: boolean;
}

const mapStateToProps = (state: any): StateProps => ({
  tasks: state.taskReducer.tasks,
  loading: state.taskReducer.loading
});

export default connect(mapStateToProps, { getTasks })(TaskList);
