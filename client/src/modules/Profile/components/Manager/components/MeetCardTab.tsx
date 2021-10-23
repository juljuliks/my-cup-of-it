import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { IMeetCard } from './types';
import { getDate, getTime } from '../../../getMeetDate';

const MeetCard: React.FC<IMeetCard> = ({ buttons, meetData }) => (
  <Card
    type="inner"
    title={<Link to={`/users/${meetData.userId}`}>{`C ${meetData.firstname} ${meetData.lastname}`}</Link>}
    extra={buttons}
  >
    <p>
      Дата:
      {' '}
      {getDate(meetData.date)}
    </p>
    <p>
      Время:
      {' '}
      {getTime(meetData.date)}
    </p>
    <p>{`${meetData.comment}`}</p>
  </Card>
);

export default MeetCard;
