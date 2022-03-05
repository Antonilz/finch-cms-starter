import { useEffect } from 'react';
import { usePopup } from '~features/ui/hooks/usePopup';
import { useBreakpoint } from '~features/ui/hooks/useBreakpoint';
import { Button } from '~components/Button';
import {
  Wrapper,
  Container,
  Content,
  CloseButton,
  Title,
  Text,
  ButtonWrapper,
  ButtonContainer,
  Social,
  Link,
} from './styles';

import { Interview as InterviewProps } from '../../types';

export const Interview: React.FC<InterviewProps> = ({
  title,
  text,
  button,
  socialLinks,
  signUpButton,
}) => {
  const { isExceedScreenWidth: shouldShowPopup } = useBreakpoint('xl');
  const { toggle, isOpen, close } = usePopup(shouldShowPopup);

  useEffect(() => {
    window.addEventListener('resize', close);

    return () => {
      window.removeEventListener('resize', close);
    };
  }, [close]);

  return (
    <>
      <Wrapper opened={isOpen}>
        <Container>
          <CloseButton onClick={toggle} />
          <Social>
            {socialLinks?.map(({ data: { title: linkTitle, href } }, index) => (
              <Link key={index} route={href}>
                {linkTitle}
              </Link>
            ))}
          </Social>
          <Content>
            <Title dangerouslySetInnerHTML={{ __html: title }} />
            <Text dangerouslySetInnerHTML={{ __html: text }} />
            <ButtonContainer>
              {button?.map(
                ({ data: { url, text: buttonText, color } }, index) => (
                  <Button key={index} route={url} color={color}>
                    {buttonText}
                  </Button>
                )
              )}
            </ButtonContainer>
          </Content>
        </Container>
      </Wrapper>
      {!isOpen && (
        <ButtonWrapper>
          {signUpButton?.map(
            ({ data: { url, text: buttonText, color } }, index) => (
              <Button key={index} route={url} color={color} onClick={toggle}>
                {buttonText}
              </Button>
            )
          )}
        </ButtonWrapper>
      )}
    </>
  );
};
