import React from 'react';
import { List } from 'antd';
import IManagerProps from '../types';
import MeetCard from './MeetCardTab';

const CancelledMeetsTab: React.FC<IManagerProps> = ({ meets, changeMeetsStatus, isMentor }) => (
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
    ) : <p>У вас пока нет отмененных встреч</p>}
  </>
);

export default CancelledMeetsTab;
