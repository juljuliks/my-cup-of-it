import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';

import FeedbackCardAction from '../FeedbackCardAction';
import { IFeedbackItemProps } from './types';

const FeedbackCard: React.FC<IFeedbackItemProps> = (props) => {
  const {
    feedback, onComplete, onAccept, onReject,
  } = props;

  return (
    <Card
      type="inner"
      title={<Link to={`/feedbacks/${feedback.id}`}>{feedback.title}</Link>}
      extra={(
        <FeedbackCardAction
          feedback={feedback}
          onComplete={onComplete}
          onAccept={onAccept}
          onReject={onReject}
        />
)}
    >
      {feedback.description}
    </Card>
  );
};

export default FeedbackCard;
