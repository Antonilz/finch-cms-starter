import { FieldPolicy, Reference } from '@apollo/client';

export function offsetLimitPagination<T = Reference>(
  keyArgs: Array<string>,
  propName: string
): FieldPolicy<T[]> {
  return {
    keyArgs: keyArgs || false,
    merge(
      existing,
      incoming,
      _a: { args: { pageSize?: number; page?: number } }
    ) {
      const { args } = _a;
      const merged = existing?.[propName] ? existing[propName].slice(0) : [];

      if (args) {
        const offset =
          args.page && args.pageSize ? args.page * args.pageSize : 0;

        for (let i = 0; i < incoming[propName].length; i += 1) {
          merged[offset + i] = incoming[propName][i];
        }
      } else {
        merged.push(...incoming[propName]);
      }

      return { ...existing, ...incoming, [propName]: merged };
    },
  };
}
