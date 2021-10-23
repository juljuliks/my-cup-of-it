import React, { useState } from 'react';
import {
  Modal, Button, Calendar, Badge,
} from 'antd';
import { ICalendar } from './types';
import { getDate, getTime } from '../../../getMeetDate';

const CustomCalendar: React.FC<ICalendar> = ({ meets }) => {
  const [visible, setVisible] = useState(false);

  function getListData(value: any) {
    const currentMeets = meets ? meets.map((meet: any) => ({
      id: meet.id, date: +getDate(meet.date).split('.')[0], time: getTime(meet.date), comment: meet.comment, username: `${meet.firstname} ${meet.lastname}`,
    })) : [];

    const meetengs: any[] = [];

    currentMeets.forEach((meet, i) => {
      if (meet.date === value.date()) {
        meetengs.push(meet);
      }
    });

    return meetengs;
  }

  function dateCellRender(value: any) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData && listData.map((item: any) => (
          <>
            <p>
              {`${item.username}`}
            </p>
            <p>{`Время ${item.time}`}</p>
          </>
        ))}
      </ul>
    );
  }

  return (
    <>
      <Button type="primary" onClick={() => setVisible(true)} style={{ marginBottom: '20px' }}>
        Открыть календарь
      </Button>
      <Modal
        title="Календарь"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}

      >
        <Calendar dateCellRender={dateCellRender} />
      </Modal>
    </>
  );
};

export default CustomCalendar;
