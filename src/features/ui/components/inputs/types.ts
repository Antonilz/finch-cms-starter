export interface InputProps<T> {
  name: string;
  active?: boolean;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  touched?: boolean;
  error?: string;
  helperText?: string;
  label?: string | React.ReactNode;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange: (event: React.ChangeEvent<T>) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  value?: T;
  type?: string;
  hasError?: boolean;
}
