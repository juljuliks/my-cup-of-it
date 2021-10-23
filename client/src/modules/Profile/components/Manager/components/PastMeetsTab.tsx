import React from 'react';
import { List } from 'antd';
import { CustomButton } from './CustomButton';
import MeetCard from './MeetCardTab';
import IManagerProps from '../types';
import { IMeet } from '../../../../../types/usersTypes';

const PastMeets: React.FC<IManagerProps> = ({ meets, changeMeetsStatus, isMentor }) => (
  <>
    {(meets && !!meets.length) ? (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 2,
        }}
        dataSource={meets}
        renderItem={(meet) => (
          <List.Item key={meet.id}>
            <MeetCard
              key={meet.id}
              buttons={[]}
              meetData={meet}
              isMentor={isMentor}
            />
          </List.Item>
        )}
      />
    ) : <p>У вас пока нет прошедших встреч</p>}
  </>
);

export default PastMeets;
