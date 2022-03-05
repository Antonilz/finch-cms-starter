import styled from 'styled-components';
import { media } from '~theme/breakpoints';
import { Container } from '~features/ui/components/Container';

export const Wrapper = styled(Container)`
  padding-bottom: 15vh;
  padding-top: 140px;

  ${media.down('lg')} {
    padding-top: 60px;
    padding-bottom: 5vh;
  }
`;

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 84px;
  line-height: 1;
  margin-bottom: 40px;
  margin-top: 0;
  max-width: 95%;
  margin-left: -6px;

  ${media.down('xxl')} {
    font-size: 64px;
    margin-left: -4px;
  }

  ${media.down('xl')} {
    font-size: 48px;
    margin-left: -3px;
  }
`;

export const Text = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.3;
`;
