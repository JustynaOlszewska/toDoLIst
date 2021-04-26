interface SetForm {
  type: string;
  payload?: React.SyntheticEvent;
}

export type DispatchForm = (type: SetForm) => void;
