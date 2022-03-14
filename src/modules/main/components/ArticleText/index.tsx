import { ArticleText as ArticleTextProps } from '../../types';
import { Wrapper } from './styles';

export const ArticleText = ({ text }: ArticleTextProps) => (
  <Wrapper>{text}</Wrapper>
);
