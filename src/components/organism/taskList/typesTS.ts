export interface TaskListProps extends StateProps {
  getTasks: () => any;
}

export interface StateProps {
  tasks: TaskDetails[];
  loading: boolean;
}

export interface TaskDetails {
  id: number;
  text: string;
  textArea: string;
  priority: boolean;
  date: string;
}
