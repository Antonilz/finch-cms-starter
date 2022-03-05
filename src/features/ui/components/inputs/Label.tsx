import styled, { css } from 'styled-components';

import { colors } from '../../constants/colors';

export const Label = styled.label<{ hasError?: boolean; isRequired?: boolean }>`
  color: var(--text-color);
  display: flex;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  pointer-events: none;
  width: 100%;
  margin-bottom: 24px;

  ${({ isRequired }) =>
    isRequired &&
    css`
      &::after {
        content: '*';
        position: relative;
        left: 2px;
        color: ${colors.red['200']};
      }
    `}
`;
