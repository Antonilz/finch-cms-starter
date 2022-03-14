import { useState, FocusEvent } from 'react';

import { InputProps } from '../types';
import { Label } from '../Label';
import {
  FormControl,
  InputWrapper,
  ErrorMessage,
  Input,
  TextInputLabel,
} from './styles';

const DefaultInput = <
  V extends string | number | readonly string[] | undefined
>(
  props: InputProps<V>
) => <Input {...props} />;

type BaseInputProps<Value, As extends React.ElementType> = {
  as?: As;
} & InputProps<Value> &
  Omit<React.ComponentPropsWithoutRef<As>, keyof InputProps<Value>>;

export const BaseInput = <
  Value extends string | number | readonly string[] | undefined,
  C extends React.ElementType
>(
  props: BaseInputProps<Value, C>
) => {
  const {
    error = '',
    label = '',
    invalid,
    required = false,
    as,
    value = '',
    onFocus,
    onBlur,
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const InputComponent = as || DefaultInput;
  const LabelComponent = as ? Label : TextInputLabel;
  const hasLabel = Boolean(label);
  const hasError = Boolean(invalid && error);

  const handleFocus = (ev: FocusEvent<HTMLInputElement>) => {
    onFocus?.(ev);
    setIsFocused(true);
  };

  const handleBlur = (ev: FocusEvent<HTMLInputElement>) => {
    onBlur?.(ev);
    setIsFocused(false);
  };

  return (
    <FormControl isInvalid={invalid} isRequired={required}>
      <InputWrapper hasError={hasError}>
        {hasLabel && (
          <LabelComponent
            hasError={hasError}
            isActive={isFocused || Boolean(value)}
            isRequired={required}
          >
            {label}
          </LabelComponent>
        )}
        <InputComponent {...props} onBlur={handleBlur} onFocus={handleFocus} />
      </InputWrapper>
      {hasError && <ErrorMessage>{error}</ErrorMessage>}
    </FormControl>
  );
};
