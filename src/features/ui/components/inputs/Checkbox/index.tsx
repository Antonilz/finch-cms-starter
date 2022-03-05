import { forwardRef, useCallback } from 'react';

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

export const Checkbox = forwardRef(
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
