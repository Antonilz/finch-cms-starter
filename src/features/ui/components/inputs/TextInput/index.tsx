import React from 'react';

import { BaseInput } from '../BaseInput';
import { InputProps } from '../types';

const INTEGER_FILTER_EVENT_KEY = ['.', 'e'];
const types = {
  TEXT: 'text',
  NUMBER: 'number',
} as const;

type NumberProps = {
  type: 'number';
  min?: number;
  max?: number;
};

type TextProps = { type: 'text' | 'email' };

type TextInputProps<T> = InputProps<T> & (NumberProps | TextProps);

export const TextInput = (props: TextInputProps<string>) => {
  const { type, onChange, value, ...inputProps } = props;

  const handleChange = ({
    target: { value: _value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (type === types.NUMBER) {
      const { min, max } = props;
      if (
        (typeof _value === 'number' &&
          Number.isFinite(_value) &&
          typeof min === 'number' &&
          typeof max === 'number' &&
          _value >= min &&
          _value <= max) ||
        !_value
      ) {
        onChange(_value);
      }
    } else {
      onChange(_value);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (type === types.NUMBER && INTEGER_FILTER_EVENT_KEY.includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const inputType = type === types.NUMBER ? 'text' : type;

  return (
    <BaseInput
      {...{ type: inputType, onChange: handleChange, onKeyDown, value }}
      {...inputProps}
    />
  );
};
