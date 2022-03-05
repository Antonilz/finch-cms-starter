import styled, { css } from 'styled-components';

import { colors } from '~features/ui/constants';

export const Wrapper = styled.div`
  position: relative;
  width: 60px;
  user-select: none;
`;

export const Options = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  background: var(--primary-color);
  border: 2px solid ${colors.grey['300']};
  box-shadow: 2px 2px 6px ${colors.grey.A300};
  border-radius: 2px;
  margin-top: 6px;
  z-index: 2;
`;

export const Label = styled.p`
  font-weight: 500;
  font-size: 17px;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0;
  text-transform: uppercase;
  height: 20px;
`;

export const CurrentValue = styled(Label)<{ $isActive: boolean }>`
  justify-content: space-between;
  padding-left: 8px;

  &::after {
    content: '';
    border: solid currentColor;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 4px;
    transform: rotate(45deg) translate(-2px, -2px);
    transition: transform 150ms linear;
    margin-left: 8px;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      &::after {
        transform: rotate(-135deg) translate(-2px, -2px);
      }
    `};
`;

export const Option = styled.div<{ selected: boolean }>`
  padding: 9px 18px;

  &:hover {
    background: var(--tertiary-color);
  }

  ${({ selected }) =>
    selected &&
    css`
      pointer-events: none;
      background: var(--tertiary-color);
    `}
`;
