import styled, { css } from 'styled-components';
import { Link as DefaultLink } from '~features/routing/components/Link';
import { paddings } from '~features/ui/constants';
import { media } from '~theme/breakpoints';
import { Container } from '../../../ui/components/Container';

export const headerHeight = 100;

export const Wrapper = styled(Container)`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.down('lg')} {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
  }
`;

export const Header = styled(Container)`
  height: ${headerHeight}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;

  nav {
    margin-left: -${paddings.xxl / 8}px;
    margin-right: -${paddings.xxl / 8}px;

    ${media.down('xxl')} {
      margin-left: -${paddings.xl / 8}px;
      margin-right: -${paddings.xl / 8}px;
    }

    ${media.down('xl')} {
      margin-left: 0;
      margin-right: 0;
    }
  }

  ${media.down('lg')} {
    position: sticky;
    top: 0;
    background-color: var(--secondary-color);
    flex-direction: column-reverse;
    align-items: flex-start;
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
  }
`;

export const Logo = styled.div<{ src: string }>`
  ${({ src }) => css`
    width: 98px;
    height: 24px;
    background-color: var(--text-color);
    mask-image: url(${src});
    mask-size: cover;
  `}
`;

export const Link = styled(DefaultLink)<{ $isActive: boolean }>`
  display: inline-block;
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  font-size: 17px;
  line-height: 1.2;
  color: inherit;
  margin: 20px 20px 10px 20px;
  padding-bottom: 10px;
  text-decoration: none;
  border-bottom: ${({ $isActive }) =>
    $isActive ? '2px solid var(--text-color)' : '0'};

  ${media.down('lg')} {
    margin: 10px 10px 0 10px;
  }
`;
