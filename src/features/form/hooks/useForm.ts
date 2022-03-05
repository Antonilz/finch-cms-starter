import {
  useForm as _useForm,
  UseFormProps as _UseFormProps,
} from 'react-hook-form';
import { AnyObjectSchema } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type UseFormProps = {
  validationSchema?: AnyObjectSchema;
} & _UseFormProps;

export const useForm = ({ validationSchema, ...props }: UseFormProps = {}) => {
  const methods = _useForm({
    ...(validationSchema ? { resolver: yupResolver(validationSchema) } : null),
    ...props,
  });

  return methods;
};
