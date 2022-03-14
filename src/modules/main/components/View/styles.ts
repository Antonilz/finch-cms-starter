import styled from 'styled-components';
import { media } from '~theme/breakpoints';
import { paddings } from '~features/ui/constants';

export const containerMaxWidth = 1200;
export const widthRatios = {
  xxl: 0.9,
};

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-right: ${paddings.xxl}px;
  max-width: ${containerMaxWidth}px;
  margin: 0 auto;

  ${media.down('lg')} {
    padding-bottom: 40px;
  }

  ${media.down('xxl')} {
    max-width: ${containerMaxWidth * widthRatios.xxl}px;
  }

  ${media.down('xl')} {
    padding-left: ${paddings.lg}px;
    padding-right: ${paddings.lg}px;
  }

  ${media.down('lg')} {
    padding-left: ${paddings.md}px;
    padding-right: ${paddings.md}px;
  }
`;
