import { Wrapper, Title, Text } from './styles';

import { Hero as HeroProps } from '../../types';

export const Hero: React.FC<HeroProps> = ({ title, text }) => (
  <Wrapper>
    <Title dangerouslySetInnerHTML={{ __html: title }} />
    <Text dangerouslySetInnerHTML={{ __html: text }} />
  </Wrapper>
);
