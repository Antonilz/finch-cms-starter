import styled, { css } from 'styled-components';
import { Link as DefaultLink } from '~features/routing';
import { Button as DefaultButton } from '~components/Button';
import { media } from '~theme/breakpoints';
import { paddings } from '~features/ui/constants';
import { Container as DefaultContainer } from '~features/ui/components/Container';
import { formatAssetUrl } from '~utils/formatAssetUrl';

import { BlockSizeVariants } from './types';

export const Button = styled(DefaultButton)`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  height: auto;
  margin-top: auto;
  padding: 10px 20px;
  align-self: flex-start;

  ${media.down('md')} {
    align-self: flex-start;
    min-width: auto;
  }
`;

export const Wrapper = styled(DefaultContainer)<{ compact: boolean }>`
  ${({ compact }) => css`
    padding-top: ${compact ? 30 : 140}px;
    padding-bottom: ${compact ? 20 : 40}px;
    display: flex;
    flex-direction: column;

    & > ${Button} {
      align-self: flex-start;
      padding: 0 24px;
      line-height: 50px;
      font-size: 16px;
    }

    ${media.down('lg')} {
      padding-top: ${compact ? 20 : 60}px;
    }
  `};
`;

const insertedContentStyles = css`
  ul {
    li {
      margin-bottom: 12px;
    }
  }
`;

export const Header = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 54px;
  line-height: 1.3;
  margin-top: 0;
  margin-bottom: 20px;

  ${media.down('xl')} {
    font-size: 40px;
  }
`;

export const Subheader = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 40px;

  ${insertedContentStyles};
`;

export const TagsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;

  & > * {
    flex-shrink: 0;
    margin-right: 12px;
    margin-bottom: 12px;
  }
`;

export const Tag = styled.span`
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid var(--tertiary-color);
  box-sizing: border-box;
  border-radius: 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Item = styled(DefaultLink).attrs(
  ({ route }) =>
    !route && {
      as: 'div',
    }
)<{
  image: string;
  sizeType: `${BlockSizeVariants}`;
}>`
  ${({ image, sizeType }) => css`
    position: relative;
    border: 1px solid var(--tertiary-color);
    padding-bottom: 100%;

    ${sizeType === BlockSizeVariants.DEFAULT &&
    image &&
    css`
      padding-bottom: 50%;
    `}

    ${sizeType === BlockSizeVariants.PRIMARY &&
    css`
      &:nth-child(3) {
        grid-column: 1/3;
        padding-bottom: 50%;

        ${!image &&
        css`
          ${media.down('md')} {
            padding-bottom: 0;
          }
        `};
      }
    `}
   

    ${sizeType === BlockSizeVariants.TERTIARY &&
    css`
      &:nth-child(1) {
        grid-column: 1/3;
        padding-bottom: 50%;

        ${media.down('md')} {
          padding-bottom: ${image ? '50%' : '0'};
        }
      }
    `};

    ${image &&
    css`
      ::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: url(${formatAssetUrl({ url: image })}) no-repeat center;
        background-size: cover;
      }
    `};

    ${!image &&
    css`
      ${media.down('md')} {
        padding-bottom: 0;
      }

      ${Content} {
        ${media.down('md')} {
          position: static;
        }
      }
    `};
  `}
`;

export const Container = styled.div<{
  $columnCount: number;
}>`
  ${({ $columnCount }) => css`
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(${$columnCount}, 1fr);

    ${media.down('md')} {
      grid-template-columns: repeat(1, 1fr);

      && > * {
        grid-column: 1/2;
      }
    }
  `}
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.3;
  padding-right: 20px;
  margin-bottom: 20px;
`;

export const Text = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.6;

  & > *:first-child {
    margin-top: 0;
  }
`;

export const Counter = styled.span`
  display: inline-block;
  position: absolute;
  top: 30px;
  right: 30px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.3;
`;
