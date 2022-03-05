import styled, { css } from 'styled-components';

type InnerProps = {
  horizontal: boolean;
  vertical: boolean;
  isDragging: boolean;
};

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Inner = styled.div<InnerProps>`
  ${({ horizontal, vertical, isDragging }) => css`
    display: flex;
    align-items: center;
    box-sizing: content-box;
    background-color: transparent;
    ${vertical &&
    css`
      flex-direction: column;
      height: 100%;
      max-height: inherit;
    `};
    overflow-y: ${vertical ? 'scroll' : 'hidden'};
    overflow-x: ${horizontal ? 'scroll' : 'hidden'};
    ${isDragging &&
    css`
      user-select: none;
      cursor: grab;

      & > * {
        user-select: none;
        cursor: grab;
      }
      & * {
        cursor: grab;
        user-select: none;
      }
    `};

    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }

    & > * {
      flex-shrink: 0;
    }
  `}
`;
