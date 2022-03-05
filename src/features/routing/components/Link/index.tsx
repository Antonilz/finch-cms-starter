import { forwardRef } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { scrollToElement } from '~utils/scrollTo';
import { Route } from '../../constants/routes';
import { getRoute } from '../../utils/getRoute';

export type LinkProps = Omit<NextLinkProps, 'href' | 'as'> & {
  route?: Route;
  params?: { [fieldName: string]: string | number };
  children?: React.ReactNode;
  className?: string;
  hash?: string;
  openInNewTab?: boolean;
  onClick?(event: React.SyntheticEvent<HTMLElement, Event>): void;
};

const safeNewTabProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      route,
      params,
      className,
      children,
      hash,
      shallow = false,
      replace = false,
      openInNewTab = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const handleButtonClick: React.ReactEventHandler<HTMLElement> = (event) => {
      onClick?.(event);

      if (!route && hash) {
        event.preventDefault();
        scrollToElement(hash);
      }
    };

    if (!route) {
      return (
        <span
          ref={ref}
          className={className}
          onClick={handleButtonClick}
          {...props}
        >
          {children}
        </span>
      );
    }

    const {
      route: normalizedRoute,
      isExternal,
      isRelative,
    } = getRoute(route, params, hash);
    const newTabProps = openInNewTab || isExternal ? safeNewTabProps : {};

    return isExternal ? (
      <a
        ref={ref}
        href={normalizedRoute}
        className={className}
        onClick={handleButtonClick}
        {...newTabProps}
        {...props}
      >
        {children}
      </a>
    ) : (
      <NextLink
        href={
          isRelative
            ? route
            : { query: params, pathname: normalizedRoute, hash }
        }
        shallow={shallow}
        replace={replace}
        passHref
      >
        <a
          ref={ref}
          className={className}
          onClick={onClick}
          {...newTabProps}
          {...props}
        >
          {children}
        </a>
      </NextLink>
    );
  }
);
