import { TypeTask } from '../../actions/types';

export interface AlertState {
  alert: string | null | undefined;
}

export type ActionsAlert =
  | { type: TypeTask.SET_ALERT; payload?: string }
  | { type: TypeTask.REMOVE_ALERT };
