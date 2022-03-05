import { forwardRef } from 'react';

import { Link } from '../Link';
import { variants, sizes } from './constants';
import { Button as StyledButton, Content } from './styles';

type ButtonProps = {
  children?: React.ReactNode | string;
  className?: string;
  disabled?: boolean;
  fluid?: boolean;
  icon?: React.ReactNode;
  linkComponent?: React.ElementType;
  onClick?: () => void;
  variant?: `${variants}`;
  size?: `${sizes}`;
  as?: React.ElementType;
} & Omit<React.ComponentProps<typeof Link>, 'variant'> &
  React.ComponentPropsWithoutRef<'button'>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      disabled = false,
      icon = null,
      size = sizes.md,
      linkComponent: LinkComponent = Link,
      onClick,
      route,
      params,
      variant = variants.PRIMARY,
      fluid,
      as = 'button',
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton
        disabled={disabled}
        variant={variant}
        $size={size}
        $fluid={fluid}
        $hasIcon={icon}
        as={as}
        {...{
          ...props,
          ...(route && !disabled && { as: LinkComponent, route, params }),
          ...(!disabled && { onClick }),
        }}
        ref={ref}
      >
        {icon}
        {children && <Content>{children}</Content>}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';
