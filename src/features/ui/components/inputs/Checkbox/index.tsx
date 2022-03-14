import { forwardRef, useCallback } from 'react';

import { InputProps } from '../types';
import {
  Checkbox as StyledCheckbox,
  CheckboxWrapper,
  ElementWrapper,
  Input,
  InputWrapper,
  Text,
  Wrapper,
  ErrorMessage,
} from './styles';

type CheckboxProps = Omit<InputProps<string>, 'onChange'> & {
  checked?: boolean;
  width?: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      children,
      className,
      disabled,
      error,
      name,
      onChange,
      width,
      label,
      value,
      ...props
    },
    ref
  ) => {
    const handleChange = useCallback(
      (event) => {
        onChange(event);
      },
      [onChange]
    );

    return (
      <Wrapper className={className} isDisabled={disabled}>
        <ElementWrapper htmlFor={name} $width={width}>
          <InputWrapper isDisabled={disabled}>
            <Input
              checked={checked}
              disabled={disabled}
              id={name}
              name={name}
              onChange={handleChange}
              ref={ref}
              value={value}
              {...props}
              type="checkbox"
            />
            <CheckboxWrapper>
              <StyledCheckbox checked={checked} />
            </CheckboxWrapper>
            <Text>{label || children}</Text>
          </InputWrapper>
        </ElementWrapper>
        <ErrorMessage>{error}</ErrorMessage>
      </Wrapper>
    );
  }
);
