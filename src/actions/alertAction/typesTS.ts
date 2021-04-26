interface SetAlert {
  type: string;
  payload?: string;
}

export type DispatchAlert = (type: SetAlert) => void;
