import styled, { css } from 'styled-components';
import styledMap from 'styled-map';

// import { Typography } from '../Typography';
import { colors } from '../../constants/colors';
import { variants, sizes } from './constants';

export const Content = styled.div.attrs({
  variant: 'secondary',
  size: 2,
})`
  display: flex;
  align-items: center;
  color: inherit;
`;

const buttonSizeCSS = styledMap('$size', {
  [sizes.sm]: css`
    height: 30px;
    padding: 4px 13px;
    border-radius: 18px;
  `,
  [sizes.md]: css`
    height: 40px;
    padding: 9px 16px;
    border-radius: 29px;
  `,
  [sizes.lg]: css`
    height: 46px;
    padding: 15px 16px;
    border-radius: 46px;
  `,
});

const buttonVariantCSS = css`
  ${styledMap('variant', {
    [variants.PRIMARY]: css`
      background-color: var(--text-color);
      color: var(--primary-color);
      border: 0;

      :not(:disabled) {
        :hover {
          opacity: 0.75;
        }
      }
    `,
    [variants.SECONDARY]: css`
      background-color: var(--text-color);
      color: var(--primary-color);
      border: 0;

      :not(:disabled) {
        :hover {
          opacity: 0.75;
        }
      }
    `,
    [variants.FILLED]: css`
      background-color: var(--text-color);
      color: var(--primary-color);
      border: 0;

      :not(:disabled) {
        :hover {
          opacity: 0.75;
        }
      }
    `,
    [variants.UNSTYLED]: css``,
  })}
`;

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => !['variant', 'fluid'].includes(prop),
})<{
  variant: `${variants}`;
  $size: `${sizes}`;
  $fluid: boolean;
  $hasIcon?: boolean;
}>`
  ${({ $fluid, $hasIcon }) => css`
     {
      align-items: center;
      background-color: transparent;
      color: ${colors.grey.white};
      cursor: pointer;
      display: inline-flex;
      justify-content: center;
      overflow: hidden;
      outline: none;
      text-decoration: none;
      transition: border 150ms linear, background-color 150ms linear,
        border-color 150ms linear, background-color 150ms linear,
        opacity 150ms linear;
      width: ${$fluid ? '100%' : 'auto'};
      appearance: none;

      ::-moz-focus-inner {
        border: 0;
      }

      :disabled {
        cursor: not-allowed;
        opacity: 0.4;
      }

      svg:not(:only-child) {
        margin-right: 16px;
      }

      ${buttonSizeCSS};
      ${$hasIcon
        ? css`
            border: 0;
            color: ${colors.grey.white};
            padding: 0;
            height: auto;

            :not(:disabled) {
              :hover {
                opacity: 0.75;
              }

              :active {
                opacity: 0.75;
              }
            }
          `
        : buttonVariantCSS};
    }
  `}
`;
