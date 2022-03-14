import styled, { css } from 'styled-components';

import { colors } from '../../../constants/colors';

export const Wrapper = styled.div<{ isDisabled?: boolean }>`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 24px;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.3 : 1)};
  transition: opacity 150ms linear;
`;

const checkIconColor = 'var(--text-color)';

export const Checkbox = styled.i<{ checked?: boolean }>`
  display: flex;
  box-sizing: border-box;

  &::after {
    content: '';
    position: absolute;
    top: 3.5px;
    left: 7px;
    width: 4px;
    height: 8px;
    border-right: 2px solid ${checkIconColor};
    border-bottom: 2px solid ${checkIconColor};
    transform: rotate(43deg);
    transition: opacity 0.2s linear;
    opacity: 0;
  }

  ${({ checked }) =>
    checked &&
    css`
      border-color: transparent;
      opacity: 1;

      &::after {
        opacity: 1;
      }
    `}
`;

export const CheckboxWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  padding: 2px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 2px solid var(--text-color);
`;

export const Input = styled.input.attrs(() => ({ type: 'checkbox' }))`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  ${({ disabled }) =>
    !disabled &&
    css`
      &:focus ~ ${CheckboxWrapper}, &:hover ~ ${CheckboxWrapper} {
        ${Checkbox} {
          opacity: 1;
        }
      }

      &:active ~ ${CheckboxWrapper} {
        ${Checkbox} {
          opacity: 1;
        }
      }

      &:checked ~ ${CheckboxWrapper} {
        ${Checkbox} {
          border-color: transparent;
          opacity: 1;

          &::after {
            opacity: 1;
          }
        }
      }
    `};
`;

export const InputWrapper = styled.label<{ isDisabled?: boolean }>`
  ${({ isDisabled }) => css`
    position: relative;
    display: flex;
    align-items: flex-start;
    width: 100%;
    cursor: ${isDisabled ? 'default' : 'pointer'};
  `}
`;

export const Text = styled.p.attrs(() => ({
  element: 'span',
  align: 'left',
}))`
  margin: 0 14px;
  flex-grow: 1;
  width: calc(100% - 24px);
  user-select: none;
  font-size: 16px;
  line-height: 22px;
  color: var(--text-color);
`;

export const ElementWrapper = styled.label<{ $width?: number }>`
  ${({ $width }) => css`
    max-width: ${$width ? `${$width}px` : '100%'};
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  `}
`;

export const ErrorMessage = styled.span`
  display: flex;
  position: absolute;
  bottom: -16px;
  left: 38px;
  color: ${colors.red['200']};
  font-size: 10px;
  width: 100%;
  user-select: none;
  white-space: nowrap;
`;
