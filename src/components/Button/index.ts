import styled, { css } from 'styled-components';
import { Link as DefaultLink } from '~features/routing';
import { media } from '~theme/breakpoints';

export const Button = styled(DefaultLink)<{
  color?: string;
}>`
  ${({ color = '#fff' }) => css`
    font-family: 'Open Sans', sans-serif;
    display: inline-block;
    padding: 0 24px;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    line-height: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: var(--text-color, ${color});
    color: var(--primary-color);

    ${media.down('xl')} {
      min-width: 240px;
    }
  `}
`;
