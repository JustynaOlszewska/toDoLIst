export interface ButtonProps {
  handleClick: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  task: string;
}
