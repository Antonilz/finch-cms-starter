import React, { useState } from 'react';

import { Checkbox } from '../Checkbox';

type CheckboxGroupProps = {
  options: { value: string; label: React.ReactNode }[];
  name: string;
};

export const CheckboxGroup = ({
  options,
  name,
  onChange,
  value: fieldValue,
}: CheckboxGroupProps) => {
  const [groupValue, setGroupValue] = useState(fieldValue || []);

  return (
    <>
      {options.map(({ value, label }) => (
        <Checkbox
          onChange={(e) => {
            const valuesSet = new Set(groupValue);
            if (e.target.checked) {
              valuesSet.add(e.target.value);
            } else {
              valuesSet.delete(e.target.value);
            }

            const newValue = Array.from(valuesSet);
            onChange(newValue);
            setGroupValue(newValue);
          }}
          key={value}
          checked={groupValue.includes(value)}
          type="checkbox"
          value={value}
          label={label}
          name={name}
        />
      ))}
    </>
  );
};
