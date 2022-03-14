export const headingEnum = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
};

export const variantEnum = {
  ...headingEnum,
  primary: 'primary',
  secondary: 'secondary',
} as const;

export const elementEnum = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  p: 'p',
  caption: 'caption',
  ul: 'ul',
  ol: 'ol',
  li: 'li',
  span: 'span',
  label: 'label',
  div: 'div',
} as const;

export const weightEnum = {
  bold: 'bold',
  semiBold: 'semiBold',
  medium: 'medium',
  regular: 'regular',
  light: 'light',
  extraLight: 'extraLight',
} as const;

export const textSizes = {
  h1: [70, 1.1],
  h2: [50, 1.1],
  h3: [35, 1.1],
  h4: [20, 1.1],
  1: [25, 1.1],
  2: [20, 1.1],
  3: [16, 1.1],
  4: [16, '22.4px'],
} as const;

export const alignEnum = {
  inherit: 'inherit',
  left: 'left',
  center: 'center',
  right: 'right',
} as const;

export const elementByVariant = new Proxy(
  {
    [variantEnum.h1]: elementEnum.h1,
    [variantEnum.h2]: elementEnum.h2,
    [variantEnum.h3]: elementEnum.h3,
    [variantEnum.primary]: elementEnum.p,
    [variantEnum.secondary]: elementEnum.p,
  },
  {
    get(target, prop: keyof typeof variantEnum) {
      if (prop in target) {
        return target[prop];
      }

      return elementEnum.p;
    },
  }
);
