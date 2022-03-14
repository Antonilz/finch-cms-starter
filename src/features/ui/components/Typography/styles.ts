import styled, { css } from 'styled-components';

import {
  alignEnum,
  variantEnum,
  weightEnum,
  headingEnum,
  textSizes,
} from './constants';

const variantStyles = {
  [variantEnum.primary]: css`
    font-family: 'Open Sans', sans-serif;
  `,
  [variantEnum.secondary]: css`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  `,
};

const weights = {
  [weightEnum.bold]: 700,
  [weightEnum.semiBold]: 600,
  [weightEnum.medium]: 500,
  [weightEnum.regular]: 400,
  [weightEnum.light]: 300,
  [weightEnum.extraLight]: 200,
};

export const getFontStyles = (
  variant: keyof typeof variantEnum = variantEnum.primary,
  weight: keyof typeof weightEnum,
  size: keyof typeof textSizes
) => {
  const isHeading = Object.values(headingEnum).includes(variant);
  const [fontSize, lineHeight] =
    textSizes[(isHeading ? variant : size) as keyof typeof textSizes];

  return css`
    ${variantStyles[
      (isHeading
        ? variantEnum.secondary
        : variant) as keyof typeof variantStyles
    ]};
    font-weight: ${weights[weight]};
    font-size: ${fontSize}px;
    line-height: ${lineHeight};
  `;
};

export const Text = styled.p<{
  className: string;
  variant: keyof typeof variantEnum;
  $inline: boolean;
  align: typeof alignEnum[keyof typeof alignEnum];
  $marginBottom: number | string;
  $fluid: boolean;
  color: string;
  weight: typeof weightEnum[keyof typeof weightEnum];
  size: keyof typeof textSizes;
  $numOfLines?: number;
}>`
  ${({
    $inline,
    variant,
    align,
    $marginBottom,
    color,
    $fluid,
    weight,
    size,
    $numOfLines,
  }) => css`
    ${getFontStyles(variant, weight, size)};
    display: ${$inline ? 'inline-flex' : 'block'};
    text-align: ${align};
    color: ${color ?? 'var(--text-color)'};
    margin: 0;
    padding: 0;
    transition: color 150ms linear;
    ${$marginBottom &&
    css`
      margin-bottom: ${typeof $marginBottom === 'number' ? $marginBottom : 0}px;
    `};
    ${$fluid &&
    css`
      width: 100%;
    `};
    ${$numOfLines &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${$numOfLines};
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
  `};

  a {
    text-decoration: underline;
  }
`;
