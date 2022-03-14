import { useRouter } from 'next/router';

import { Link } from '~features/routing/components/Link';
import { useBreakpoint } from '~features/ui/hooks/useBreakpoint';
import { Link as LinkProps } from '~features/ui/types';
import { LocaleSelect } from '~features/i18n';
import {
  Wrapper,
  Header as StyledHeader,
  // Logo,
  Link as StyledLink,
} from './styles';

export const Header: React.FC<{
  navLinks?: Array<{ data: LinkProps }>;
}> = ({ navLinks }) => {
  const { isDesktop } = useBreakpoint();
  const {
    query: { urn = [] },
  } = useRouter();
  const currentHref = `/${urn.join('/')}`;

  return (
    <>
      <StyledHeader>
        {isDesktop && <Link route="/">Логотип</Link>}
        <nav>
          {navLinks?.map(({ data: { title, href } }, index) => (
            <StyledLink
              key={index}
              route={href}
              $isActive={href === currentHref}
            >
              {title}
            </StyledLink>
          ))}
        </nav>
        {isDesktop && <LocaleSelect />}
      </StyledHeader>
      {!isDesktop && (
        <Wrapper>
          <Link route="/">Логотип</Link> {!isDesktop && <LocaleSelect />}
        </Wrapper>
      )}
    </>
  );
};
