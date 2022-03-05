import { useMemo } from 'react';

import { useSendFormDataMutation } from '@main/model/__generated__/sendFormData';
import { useForm, Field } from '~features/form';
import { Label } from '~features/ui/components/inputs/Label';
import { Container } from '~features/ui/components/Container';
import { Button } from '~features/ui/components/Button';

export const FormBlock = ({ blocks, name }) => {
  const [sendFormData, { loading }] = useSendFormDataMutation();

  const formBlocks = useMemo(() => {
    return blocks.map(({ data: { label, fields } }) => ({
      label,
      fields: JSON.parse(fields),
    }));
  }, [blocks]);

  const {
    control,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (values) => {
    console.log(values, name);
    await sendFormData({
      variables: {
        data: {
          data: JSON.stringify({ values }),
          name,
          counter: Object.values(values).reduce(
            // eslint-disable-next-line no-return-assign
            (acc: number, value: string | string[]) =>
              Array.isArray(value) ? (acc += value.length) : acc,
            0
          ),
        },
      },
    });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formBlocks.map(({ label, fields }) => (
          <div key={label}>
            <Label>{label}</Label>
            {fields.map((field) => (
              <Field
                key={`${field.name}${field.value ?? ''}`}
                control={control}
                {...field}
              />
            ))}
          </div>
        ))}
        <Button type="submit" disabled={isSubmitSuccessful || loading}>
          Отправить
        </Button>
      </form>
    </Container>
  );
};
