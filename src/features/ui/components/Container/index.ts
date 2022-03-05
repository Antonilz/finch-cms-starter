import styled from 'styled-components';
import { media } from '~theme/breakpoints';
import { paddings } from '~features/ui/constants';

export const containerMaxWidth = 1200;
export const widthRatios = {
  xxl: 0.8,
};

export const Container = styled.div`
  position: relative;
  padding-right: ${paddings.xxl * 2 + paddings.lg / 2}px;
  max-width: ${containerMaxWidth}px;
  margin: auto;

  ${media.down('xxl')} {
    max-width: ${containerMaxWidth * widthRatios.xxl}px;
    padding-right: ${paddings.xl * 2 + paddings.lg / 2}px;
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
