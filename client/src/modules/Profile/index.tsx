/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { Tabs } from 'antd';
import { useParams } from 'react-router-dom';
import InfoPage from './components/InfoPage';
import Manager from './components/Manager';
import { Contaiter, InnerContainer } from './style';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { IMyProfile, IProfile } from '../../types/usersTypes';
import { actions } from '../../redux/slices';

const { TabPane } = Tabs;

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.profile);
  const users = useAppSelector((state) => state.allUsers.data);
  const { userId }: { userId: string } = useParams();
  const isMe = Boolean(!userId);

  const isCurrentUser = (user: IMyProfile | IProfile | undefined): user is IMyProfile => Boolean(user) && isMe;

  let user: IMyProfile | IProfile | undefined;
  if (isMe) user = currentUser;
  else user = users.find((userData) => userData.id === userId);
  console.log(user);
  // нельзя поменять роль, если есть предстоящие встречи
  const disableChangeRole = Boolean(currentUser.meets && currentUser.meets.filter((meet) => meet.status === 'accepted' || meet.status === 'pending').length);

  function changeMeetsStatus(status: string, id: string) {
    dispatch(actions.changeUserMeetStatusPending({ status, id }));
  }

  function changeMeetsDate(meet: any, values: any) {
    const { date, time, comment } = values;
    const selectedDate = date ? date.toISOString().split('T')[0] : null;
    const selectedTime = time ? time.toISOString().split('T')[1] : null;
    const meetingDate = (selectedDate && selectedTime) ? `${selectedDate}T${selectedTime}` : null;
    values.date = meetingDate;

    for (const key in values) {
      if (!values[key]) {
        delete values[key];
      }
    }
    const data = { id: meet.id, ...values };

    if (Object.keys(values).length) {
      dispatch(actions.changeMeetDatePending(data));
      dispatch(actions.changeUserMeetStatusPending({ status: 'accepted', id: meet.id }));
      return;
    }
    dispatch(actions.changeUserMeetStatusPending({ status: 'accepted', id: meet.id }));
  }

  return (
    <Contaiter>
      <Tabs type="card">
        <TabPane tab="Профиль" key="1">
          <InnerContainer>
            <InfoPage
              isMe={isMe}
              profileData={user}
              disableChangeRole={disableChangeRole}
            />
          </InnerContainer>
        </TabPane>
        {isMe && (
          <TabPane tab="Менеджер встреч" key="2">
            <Manager
              isMentor={user?.isMentor || false}
              meets={isCurrentUser(user) && user.meets}
              changeMeetsStatus={changeMeetsStatus}
              changeMeetsDate={changeMeetsDate}
            />
          </TabPane>
        )}
      </Tabs>
    </Contaiter>
  );
};

export default Profile;
