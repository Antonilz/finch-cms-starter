import { forwardRef } from 'react';
import {
  Link as DefaultLink,
  LinkProps as DefaultLinkProps,
} from '~features/routing';
import { Link as StyledLink } from './styles';
import { Variants } from './types';

export type LinkProps = {
  variant?: Variants;
  fluid?: boolean;
  linkComponent?: React.ElementType;
} & DefaultLinkProps;

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      linkComponent = DefaultLink,
      children,
      variant = 'inherit',
      fluid = false,
      ...props
    },
    ref
  ) => {
    return (
      <StyledLink
        as={linkComponent}
        variant={variant}
        $fluid={fluid}
        ref={ref}
        {...props}
      >
        {children}
      </StyledLink>
    );
  }
);
