import styled from 'styled-components';

import { Link } from '../Link';

export const LinkOverlay = styled(Link)`
  position: static;
  text-decoration: none;

  &::before {
    content: '';
    display: block;
    cursor: inherit;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
  }
`;

export const LinkBox = styled.div`
  position: relative;

  a[href]:not(${LinkOverlay}),
  button {
    position: relative;
    z-index: 1;
  }
`;
