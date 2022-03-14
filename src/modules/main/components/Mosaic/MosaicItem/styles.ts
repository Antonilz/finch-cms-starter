import styled, { css } from 'styled-components';

import { Typography, LinkBox, colors } from '~features/ui';
import { media } from '~theme/breakpoints';
import { formatAssetUrl } from '~utils/formatAssetUrl';

export const Title = styled(Typography).attrs({
  variant: 'h3',
  color: 'inherit',
})`
  padding-right: 4px;
  padding-left: 4px;
  margin-bottom: 20px;

  ${media.down('xl')} {
    font-size: 32px;
  }
`;

export const Text = styled(Typography).attrs({
  color: 'inherit',
  weight: 'medium',
})`
  line-height: 1.4;
  padding-right: 14px;
  padding-left: 4px;

  & > *:first-child {
    margin-top: 0;
  }
`;

export const PinnedToBottomWrapper = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

export const Badge = styled(Typography).attrs({
  variant: 'secondary',
  size: 4,
})`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
  text-transform: uppercase;
  width: 100%;
`;

export const Item = styled.div<{
  image?: string;
  $columnWidth: number;
  $totalColumnCount: number;
  dark?: boolean;
  hasHoverEffect: boolean;
  bare: boolean;
  compact?: boolean;
}>`
  ${({
    image,
    $columnWidth = 1,
    dark,
    $totalColumnCount,
    hasHoverEffect,
    bare,
    compact = false,
  }) => css`
    position: relative;
    grid-column: span ${$columnWidth};
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 0.3s ease-in-out;

    ${!bare &&
    css`
      min-height: 300px;
      border-radius: 16px;
      background-color: ${dark ? 'var(--secondary-color)' : colors.grey.white};
      color: ${dark ? 'var(--primary-color)' : 'var(--text-color)'};

      ${hasHoverEffect &&
      css`
        &:hover {
          box-shadow: 4px 11px 30px rgba(0, 0, 0, 0.14);

          ${Title} {
            opacity: 0.75;
            transition: all 0.3s ease-in-out;
          }
        }
      `};

      ${image
        ? css`
            background-image: url('${formatAssetUrl({ url: image })}');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          `
        : null};
    `};

    ${compact &&
    css`
      min-height: auto;
    `};

    ${$columnWidth === 1 &&
    $totalColumnCount > 2 &&
    css`
      width: auto;

      ${media.down('xxxl')} {
        width: 295px;
      }
    `};

    ${media.down('md')} {
      height: auto;
      width: 100%;
    }
  `}
`;

export const Content = styled(LinkBox)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  height: 100%;
  width: 100%;
`;
