export interface InputProps<T> {
  name: string;
  active?: boolean;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  touched?: boolean;
  error?: string;
  helperText?: string;
  label?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  value?: T;
  type?: string;
  hasError?: boolean;
}
