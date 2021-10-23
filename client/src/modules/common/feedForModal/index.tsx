import React, { FC, useEffect } from 'react';
import { List, Modal, Input } from 'antd';
import styled from 'styled-components';
import KnockingModal from '../../Home/componenets/KnockingModal/index';
import { modalFunc } from '../../Home/componenets/Feed/types';
import UserCard from '../../Home/componenets/UserCard/index';
import { FeedProps } from './types';

const FeedForModal: React.FC<FeedProps> = ({ mentors }) => {
//   const Container = styled.div`
//   width: 80%;
//   // margin: 50px auto 30px;
// `;

  const CardsWrapper = styled.div`
  //margin: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
  const [mentorId, setMentorId] = React.useState('');
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  //  срабатывает на кнопку "постучаться"
  const showModal: modalFunc = (id1) => {
    setMentorId(id1);
    setIsModalVisible(true);
  };

  return (
    <>
      <CardsWrapper>
        {mentors.map((mentor) => (
          <UserCard key={mentor.id} mentor={mentor} showModal={showModal} />
        ))}
      </CardsWrapper>
      <KnockingModal
        mentorId={mentorId}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};
export default FeedForModal;
