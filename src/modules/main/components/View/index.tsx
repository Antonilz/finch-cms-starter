import { Header } from '~features/layout/components/Header';
import { Footer } from '~features/layout/components/Footer';
import { Link } from '~features/ui/types';
import { Wrapper } from './styles';

type ViewProps = {
  navLinks?: Array<{ data: Link }>;
  email?: string;
  children: React.ReactNode;
};

export const View = ({ children, navLinks, email }: ViewProps) => {
  return (
    <Wrapper>
      <Header navLinks={navLinks} />
      {children}
      <Footer email={email} />
    </Wrapper>
  );
};
