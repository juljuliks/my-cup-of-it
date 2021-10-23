import React from 'react';
import FeedbackModal from './FeedbackModal/FeedbackModal';
import {
  Container, Logo, LogoWrapper, ContactsContainer, ContactsTitle, ContactsInfo,
} from './styles';
import { useAppDispatch, useAppSelector } from '../../../../hooks';

const About: React.FC = () => {
  const currentAdmin = useAppSelector((state) => state.admin.profile);
  const isAdmin = Boolean(currentAdmin?.id);

  return (
    <Container>
      <LogoWrapper>
        <Logo>MY CUP OF IT</Logo>
      </LogoWrapper>
      <ContactsContainer>
        <ContactsTitle>Контакты</ContactsTitle>
        <ContactsInfo>
          <p>
            <a href="tel:+74951234567">+7 (495) 123-45-67</a>
          </p>
          <a href="mailto:ask@htmlbook.ru">mailto:ask@htmlbook.ru</a>
        </ContactsInfo>
        {!isAdmin
          && <FeedbackModal />}
      </ContactsContainer>
    </Container>
  );
};

export default About;
