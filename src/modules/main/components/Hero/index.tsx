import { Hero as HeroProps } from '../../types';
import { Wrapper, Title, Text } from './styles';

export const Hero = ({ title, text }: HeroProps) => (
  <Wrapper>
    <Title dangerouslySetInnerHTML={{ __html: title }} />
    <Text dangerouslySetInnerHTML={{ __html: text }} />
  </Wrapper>
);
