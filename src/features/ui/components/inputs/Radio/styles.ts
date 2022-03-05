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

const MAIN_COLOR = 'var(--text-color)';

export const RadioButton = styled.i`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  transition: border-color 150ms linear, background-color 150ms linear;
  flex-shrink: 0;

  &:before {
    content: '';
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 2px solid ${MAIN_COLOR};
    border-radius: 50%;
    opacity: 1;
    transition: opacity, border 100ms linear;
  }

  &:after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${colors.grey['800']};
    opacity: 0;
    transform: scale(0);
    transition: opacity, transform 150ms cubic-bezier(0.4, 0, 1, 1) 100ms;
  }
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ ${RadioButton} {
    opacity: 1;

    &:before {
      border-color: ${MAIN_COLOR};
    }

    &:after {
      opacity: 1;
      transform: scale(1);
      background-color: ${MAIN_COLOR};
    }
  }

  &:not(:disabled) {
    &:hover {
      & ~ ${RadioButton} {
      }

      &:checked ~ ${RadioButton} {
        &:before {
          border-color: ${MAIN_COLOR};
        }
      }
    }

    &:focus {
      & ~ ${RadioButton}:before {
        opacity: 1;
      }
    }
  }

  &:disabled {
    cursor: default;
    pointer-events: none;
  }
`;

export const Text = styled.p.attrs(() => ({
  align: 'left',
}))<{ $order: number }>`
  flex-grow: 1;
  width: calc(100% - 40px);
  user-select: none;
  font-size: 16px;
  line-height: 24px;
  order: ${({ $order }) => $order};
  margin-top: 0;
  margin-bottom: 0;
  ${({ $order }) => ($order ? 'margin-left' : ' margin-right')}: 16px;
`;

export const ElementWrapper = styled.label<{
  $width?: number;
  isDisabled?: boolean;
}>`
  ${({ $width, isDisabled }) => css`
    max-width: ${$width ? `${$width}px` : '100%'};
    position: relative;
    display: flex;
    align-items: flex-start;
    cursor: ${isDisabled ? 'default' : 'pointer'};
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  `}
`;

export const ErrorMessage = styled.span`
  display: flex;
  position: absolute;
  bottom: -16px;
  left: 28px;
  color: ${colors.red['200']};
  font-size: 10px;
  width: 100%;
  user-select: none;
  white-space: nowrap;
`;
