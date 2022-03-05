import styled, { css } from 'styled-components';
import { Link as DefaultLink } from '~features/routing';
import { paddings } from '~features/ui/constants';
import { headerHeight } from '~features/layout/components/Header/styles';
import { media } from '~theme/breakpoints';
import {
  containerMaxWidth,
  widthRatios,
} from '~features/ui/components/Container';
import closeIcon from './assets/closeIcon.svg';

export const Wrapper = styled.div<{ opened: boolean }>`
  ${({ opened }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: calc(
      100% - (100% - ${containerMaxWidth}px) / 2 - ${paddings.xxl * 2}px
    );
    right: 0;
    z-index: 3;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.03);
    border-left: 1px solid var(--tertiary-color);

    ${media.down('xxl')} {
      left: calc(
        100% - (100% - ${containerMaxWidth * widthRatios.xxl}px) / 2 -
          ${paddings.xl * 2}px
      );
    }

    ${media.down('xl')} {
      display: ${opened ? 'block' : 'none'};
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 5;
    }

    ::before {
      content: '';
      display: none;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: var(--primary-color);

      ${media.down('xl')} {
        display: block;
      }
    }
  `}
`;

export const Container = styled.div`
  position: relative;
  width: ${paddings.xxl * 2 - paddings.lg / 2}px;
  height: 100%;
  padding-top: 250px;
  padding-bottom: 40px;
  margin-left: ${paddings.lg / 2}px;

  ${media.down('xxl')} {
    width: ${paddings.xl * 2 - paddings.lg / 2}px;
  }

  ${media.down('xl')} {
    width: 100%;
    height: 100%;
    margin-left: 0;
    padding: 24px;
    padding-top: 0;
    overflow: auto;
  }

  @media screen and (max-height: 680px) {
    padding-top: 120px;

    ${media.down('xl')} {
      padding: 24px;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 2;

  ${media.down('xl')} {
    display: flex;
    height: auto;
    flex-direction: column;
    width: 80%;
    max-width: 600px;
  }
`;

export const Title = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 40px;
  line-height: 1.2;
  margin-top: 0;
`;

export const Text = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 40px;
  color: var(--text-color);

  ${media.down('md')} {
    margin-bottom: 24px;
  }
`;

export const ButtonWrapper = styled.div`
  display: none;
  position: fixed;
  bottom: 36px;
  right: 200px;
  z-index: 2;

  ${media.down('xl')} {
    display: block;
    right: 36px;
  }

  ${media.down('lg')} {
    top: initial;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 30px 68px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: 48px;
  right: 24px;
  width: 24px;
  height: 24px;
  background-color: var(--text-color);
  mask-image: url(${closeIcon});
  mask-size: cover;
  border: none;
  z-index: 1;

  ${media.down('xl')} {
    display: block;
    top: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 100px;

  & > * + * {
    margin-top: 16px;
  }
`;

export const Link = styled(DefaultLink)`
  display: inline-block;
  font-weight: 500;
  font-size: 17px;
  line-height: 1.2;
  color: inherit;
  text-decoration: none;
`;

export const Social = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: ${headerHeight}px;
  display: flex;
  align-items: center;
  margin-left: -24px;
  margin-right: -24px;

  ${Link} {
    padding: 20px;

    ${media.down('xl')} {
      padding: 10px;
    }
  }

  ${media.down('xl')} {
    position: static;
    margin-top: auto;
    margin-bottom: 16px;
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
  }
`;
