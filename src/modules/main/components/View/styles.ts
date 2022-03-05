import styled from 'styled-components';
import { media } from '~theme/breakpoints';

export const Wrapper = styled.div`
  ${media.down('lg')} {
    padding-bottom: 40px;
  }
`;
