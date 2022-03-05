import styled, { css } from 'styled-components';
import { Link as DefaultLink } from '~features/routing';
import { media } from '~theme/breakpoints';

export const Wrapper = styled.div`
  padding-top: 110px;
  padding-bottom: 24px;

  ${media.down('xl')} {
    padding-bottom: 80px;
  }

  ${media.down('lg')} {
    display: none;
  }
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 56px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 110px;

  ${media.down('xl')} {
    font-size: 46px;
    margin-bottom: 60px;
  }

  ${media.down('md')} {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;

  & > *:not(:last-child) {
    margin-right: 20px;
  }

  ${media.down('lg')} {
    flex-direction: column;

    & > *:not(:last-child) {
      margin-right: 0;
    }
  }
`;

const linkStyles = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  text-decoration: none;
  color: inherit;
`;

export const Link = styled(DefaultLink)`
  ${linkStyles}
`;

const textStyles = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  color: var(--text-color);
`;

export const Contacts = styled.div`
  & > span {
    ${textStyles}
  }

  & > *:not(:last-child) {
    margin-right: 16px;
  }
`;

export const Copyright = styled.div`
  ${textStyles}
`;
