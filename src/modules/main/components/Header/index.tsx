import { Header as HeaderProps } from '../../types';
import { Wrapper, Title, Text } from './styles';

export const Header = ({ title, text }: HeaderProps) => (
  <Wrapper>
    <Title dangerouslySetInnerHTML={{ __html: title }} />
    <Text dangerouslySetInnerHTML={{ __html: text }} />
  </Wrapper>
);
