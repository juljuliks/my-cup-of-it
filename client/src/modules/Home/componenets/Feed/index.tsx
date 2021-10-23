import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Alert } from 'antd';
import { useAppSelector } from '../../../../hooks';
import Spinner from '../../../common/Spinner';
import shuffleArray from './tools';
import FeedForModal from '../../../common/feedForModal';

const Container = styled.div`
  width: 80%;
  margin: 50px auto;
  text-align: center;
`;

const Feed: React.FC = () => {
  const history = useHistory();
  const isAuth = !!useAppSelector((state) => state.user.profile).id;
  const users = useAppSelector((state) => state.allUsers.data);
  const isLoading = useAppSelector((state) => state.allUsers.isLoading);
  const singleUserIsLoading = useAppSelector((state) => state.user.isLoading);

  const activeMentors = users.filter((user) => user.isMentor && user.isActive);
  const randomMentors = shuffleArray(activeMentors, 8);

  const handleButtonClick = () => {
    history.push('/users');
  };

  if (!users.length || !isAuth) {
    return (
      <Container>
        <p>Зарегистрируйтесь чтобы получить доступ к профилям наших пользователей</p>
        <Link to="/register">Перейти к регистрации</Link>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Часть наших профecсионалов</h1>

      <FeedForModal mentors={randomMentors} />

      <div style={{ textAlign: 'center', margin: '15px 0' }}>

        <Button onClick={handleButtonClick}>Посмотреть еще</Button>
      </div>
    </Container>
  );
};

export default Feed;
