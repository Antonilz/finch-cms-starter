import { InputProps } from '../types';
import {
  RadioButton,
  ElementWrapper,
  Input,
  Text,
  Wrapper,
  ErrorMessage,
} from './styles';

type InputComponentProps = InputProps<string> & {
  labelPosition: 'right' | 'left';
  children: React.ReactNode;
  width?: number;
};

export const Radio = ({
  children,
  className,
  disabled,
  error,
  name,
  onChange,
  width,
  value,
  label,
  labelPosition = 'right',
  ...props
}: InputComponentProps) => {
  return (
    <Wrapper className={className} isDisabled={disabled}>
      <ElementWrapper
        htmlFor={`${name}-${value}`}
        $width={width}
        isDisabled={disabled}
      >
        <Text $order={labelPosition === 'left' ? 0 : 1}>
          {label || children}
        </Text>
        <Input
          disabled={disabled}
          id={`${name}-${value}`}
          name={name}
          onChange={onChange}
          value={value}
          {...props}
        />
        <RadioButton />
      </ElementWrapper>
      <ErrorMessage>{error}</ErrorMessage>
    </Wrapper>
  );
};
