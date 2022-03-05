import { useMemo } from 'react';
import { Controller, Control } from 'react-hook-form';

import { TextInput } from '~features/ui/components/inputs/TextInput';
import { Radio } from '~features/ui/components/inputs/Radio';
import { Checkbox } from '~features/ui/components/inputs/Checkbox';
import { DistributiveOmit } from '~utils/types';
import { CheckboxGroup } from '~features/ui/components/inputs/CheckboxGroup';

const notImplementedYetPlaceholder = () => null;

const inputTypes = {
  text: TextInput,
  email: TextInput,
  number: TextInput,
  radio: Radio,
  checkbox: Checkbox,
  select: notImplementedYetPlaceholder,
  checkboxGroup: CheckboxGroup,
  //   textarea: notImplementedYetPlaceholder,
  //   recaptcha: notImplementedYetPlaceholder,
  //   file: notImplementedYetPlaceholder,
} as const;

type InputTypeProps = {
  [P in keyof typeof inputTypes]: { type: P } & React.ComponentPropsWithoutRef<
    typeof inputTypes[P]
  >;
}[keyof typeof inputTypes];

export type FieldProps = DistributiveOmit<
  {
    label?: string;
    name: string;
    children?: React.ReactNode;
    component?: React.ElementType;
    value?: string;
    control: Control;
  } & InputTypeProps,
  'onChange' | 'value'
>;

export const Field = (props: FieldProps) => {
  const { children, type, control, component, name, ...restProps } = props;

  const InputComponent = useMemo(() => {
    if (component) {
      return component;
    }
    return type ? inputTypes[type] : inputTypes.text;
  }, [type, component]);

  if (InputComponent) {
    return (
      <Controller
        name={name}
        render={({ field, fieldState }) => {
          const { error } = fieldState;

          return (
            <InputComponent
              type={type}
              {...field}
              {...fieldState}
              error={error?.message}
              {...restProps}
            >
              {children}
            </InputComponent>
          );
        }}
        control={control}
      />
    );
  }

  return null;
};
