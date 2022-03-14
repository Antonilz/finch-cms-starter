import styled, { css } from 'styled-components';

import { Label } from '../Label';
import { colors } from '../../../constants/colors';

export const inputHeight = 40;

export const inputHorizontalPadding = 16;

export const FormControl = styled.div<{
  isInvalid: boolean;
  isRequired: boolean;
}>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 220px;
`;

export const InputWrapper = styled.div<{ hasError: boolean }>`
  align-items: center;
  line-height: 21px;
  display: flex;
  flex-grow: 1;
  position: relative;
  margin: 8px 0 4px 0;
`;

const activeLabelStyles = css`
  && {
    height: auto;
    max-width: 100%;
    overflow: hidden;
    padding: 0 0px;
    pointer-events: auto;
    color: var(--text-color);
    transform: translate(0px, -50%) scale(0.75);
    white-space: nowrap;
    width: auto;
    z-index: 2;
  }
`;

export const TextInputLabel = styled(Label).attrs(
  ({ hasError }: { hasError: boolean }) => ({
    element: 'label',
    color: hasError ? colors.utils.alertRed : colors.grey.A500,
  })
)<{ hasError: boolean; isActive: boolean; isRequired: boolean }>`
  ${({ hasError, isActive, isRequired }) => css`
    background-color: transparent;
    display: flex;
    height: calc(100% - 24px);
    left: 0;
    padding: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transform-origin: left center;
    transition: transform 150ms linear, color 50ms linear 100ms;
    width: 100%;
    color: var(--text-color);
    font-size: 16px;

    ${isRequired &&
    css`
      &::after {
        content: '*';
        position: relative;
        left: 2px;
        color: ${colors.red['200']};
      }
    `}

    ${(isActive || hasError) &&
    css`
      ${activeLabelStyles}
    `};
  `};
`;

export const Input = styled.input`
  font-size: 16px;
  border: 0;
  box-shadow: none;
  color: var(--text-color);
  flex-grow: 1;
  outline: none;
  padding-right: 20px;
  width: 100%;
  background-color: transparent;
  height: ${inputHeight}px;
  margin-bottom: 24px;
  border-bottom: 2px solid var(--text-color);

  :-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--text-color);
    transition: background-color 5000s ease-in-out 0s;
    background-clip: content-box;
    box-shadow: none;
  }

  :focus {
    border-color: var(--text-color);
  }

  :disabled {
    opacity: 0.48;
  }
`;

export const Caption = styled.span`
  color: white;
  display: inline-block;
  font-weight: normal;
  font-size: 12px;
`;

export const ErrorMessage = styled(Caption)`
  position: absolute;
  color: red;
  bottom: 6px;
`;
