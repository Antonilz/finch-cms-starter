import { Header } from '~features/layout/components/Header';
import { Footer } from '~features/layout/components/Footer';
import { Link } from '~features/ui/types';
import { Wrapper } from './styles';

export const View: React.FC<{
  navLinks?: Array<{ data: Link }>;
  email?: string;
}> = ({ children, navLinks, email }) => {
  return (
    <Wrapper>
      <Header navLinks={navLinks} />
      {children}
      <Footer email={email} />
    </Wrapper>
  );
};
