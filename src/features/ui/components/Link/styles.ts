import styled, { css } from 'styled-components';

import { Variants } from './types';

type StyledLinkProps = { variant?: Variants; $fluid?: boolean };

export const Link = styled.a<StyledLinkProps>`
  width: ${({ $fluid }) => ($fluid ? '100%' : 'auto')};
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: ${({ variant }) =>
      variant === 'dashed' ? 'dashed' : 'underline'};
  }

  ${({ variant }) => {
    if (variant === 'primary') {
      return css`
        color: #009edf;

        &:visited,
        &:active {
          color: #009edf;
        }
      `;
    }
    if (variant === 'secondary') {
      return css`
        color: #212121;

        &:visited,
        &:active {
          color: #212121;
        }
      `;
    }
    if (variant === 'dashed') {
      return css`
        color: inherit;

        &:visited,
        &:active {
          color: inherit;
        }
      `;
    }
    if (variant === 'underline') {
      return css`
        text-decoration: underline;
        color: inherit;

        &:visited,
        &:active {
          color: inherit;
        }
      `;
    }
    if (variant === 'inherit') {
      return css`
        color: inherit;

        &:visited,
        &:active {
          color: inherit;
        }
      `;
    }

    return null;
  }}
`;
