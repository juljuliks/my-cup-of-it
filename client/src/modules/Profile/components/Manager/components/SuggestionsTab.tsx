import React from 'react';
import { List } from 'antd';

import MeetCard from './MeetCardTab';
import { IFeatureMeetsManagerProps } from '../types';
import { ShowModalButton, CustomCancelButton } from './CustomButton';

const SuggestionsTab: React.FC<IFeatureMeetsManagerProps> = ({
  meets, changeMeetsStatus, isMentor, handleModalClick,
}) => (
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
              buttons={isMentor ? [
                <ShowModalButton key="1" buttonText="Принять встречу" clickHandler={() => handleModalClick(meet)} />,
                <CustomCancelButton key="2" buttonText="Отклонить встречу" clickHandler={() => changeMeetsStatus('cancelled', meet.id)} />,
              ] : [<CustomCancelButton key="1" buttonText="Отменить встречу" clickHandler={() => changeMeetsStatus('cancelled', meet.id)} />]}
              meetData={meet}
              isMentor={isMentor}
            />
          </List.Item>
        )}
      />
    ) : <p>{isMentor ? 'У вас пока нет предложений' : 'Вы пока не отправили ни одной заявки'}</p>}

  </>
);

export default SuggestionsTab;
