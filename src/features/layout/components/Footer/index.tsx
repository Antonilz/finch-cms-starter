import { Container } from '../../../ui/components/Container';
import { Wrapper, Title, Block, Contacts, Copyright } from './styles';

type FooterProps = {
  email?: string;
};

export const Footer = ({ email }: FooterProps) => (
  <Wrapper>
    <Container>
      {email && <Title>{email}</Title>}
      <Block>
        <Copyright>© 2022 Компания</Copyright>
        <Contacts>
          <span>Адрес</span>
          <span>Телефон</span>
        </Contacts>
      </Block>
    </Container>
  </Wrapper>
);
