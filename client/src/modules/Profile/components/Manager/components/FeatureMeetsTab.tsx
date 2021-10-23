import React from 'react';
import { List } from 'antd';
import { IFeatureMeetsManagerProps } from '../types';
import MeetCard from './MeetCardTab';
import { CustomButton, CustomCancelButton, ShowModalButton } from './CustomButton';
import CustomCalendar from './Calendar';

const FeatureMeets: React.FC<IFeatureMeetsManagerProps> = ({
  meets, changeMeetsStatus, isMentor, handleModalClick,
}) => (
  <>
    {meets && !!meets.length && <CustomCalendar meets={meets} />}
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
              buttons={isMentor ? [
                <ShowModalButton buttonText="Редактировать встречу" key="1" clickHandler={() => handleModalClick(meet)} />,
                <CustomButton buttonText="Встреча состоялась" key="2" clickHandler={() => changeMeetsStatus('completed', meet.id)} />,
                <CustomCancelButton buttonText="Отменить встречу" key="3" clickHandler={() => changeMeetsStatus('cancelled', meet.id)} />,
              ]
                : [<CustomButton buttonText="Отменить встречу" key="4" clickHandler={() => changeMeetsStatus('cancelled', meet.id)} />]}
              meetData={meet}
              isMentor={isMentor}
            />
          </List.Item>
        )}
      />
    ) : <p>У вас пока нет предстоящих встреч</p>}
  </>
);

export default FeatureMeets;
