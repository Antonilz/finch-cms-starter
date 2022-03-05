import styled, { createGlobalStyle, css } from 'styled-components';
import { colors } from '~features/ui/constants';
import { media } from '~theme/breakpoints';
import bulb from './assets/bulb.svg';

const getLightThemeStyles = (areImportantStyles = false) => {
  const importantLabel = areImportantStyles ? '!important' : '';

  return css`
    :root {
      --text-color: ${colors.grey.black}${importantLabel};
      --primary-color: ${colors.grey.white}${importantLabel};
      --secondary-color: #f9f9f9 ${importantLabel};
      --tertiary-color: ${colors.grey.A300}${importantLabel};
    }

    background-color: #f9f9f9 ${importantLabel};
    color: ${colors.grey[900]}${importantLabel};
  `;
};

const getDarkThemeStyles = (areImportantStyles = false) => {
  const importantLabel = areImportantStyles ? '!important' : '';

  return css`
    :root {
      --text-color: ${colors.grey.white}${importantLabel};
      --primary-color: ${colors.grey.black}${importantLabel};
      --secondary-color: ${colors.grey.black} ${importantLabel};
      --tertiary-color: ${colors.grey.AN300}${importantLabel};
    }

    background-color: ${colors.grey.black}${importantLabel};
    color: ${colors.grey.white}${importantLabel};
  `;
};

export const GlobalStyles = createGlobalStyle<{
  dark?: boolean;
  adaptive?: boolean;
  primary: boolean;
}>`
  ${({ dark, adaptive, primary }) => css`
    html {
      ${(() => {
        if (adaptive) {
          return css`
            @media (prefers-color-scheme: dark) {
              ${getDarkThemeStyles(primary)}
            }

            @media (prefers-color-scheme: light) {
              ${getLightThemeStyles(primary)}
            }
          `;
        }

        if (dark) {
          return css`
            ${getDarkThemeStyles(primary)}
          `;
        }

        return css`
          ${getLightThemeStyles(primary)}
        `;
      })()}
    }
  `}
`;

export const Checkbox = styled.label`
  position: fixed;
  top: 40px;
  right: 20px;
  z-index: 4;
  display: flex;
  align-items: center;
  cursor: pointer;

  input {
    z-index: -1;
    opacity: 0;
    width: 0;
  }

  div {
    width: 20px;
    height: 20px;
    mask-image: url(${bulb});
    mask-size: cover;
    background-color: var(--text-color);
  }

  ${media.down('lg')} {
    top: 20px;
  }
`;
