import React from 'react';
import { Empty, List } from 'antd';

import FeedbackCard from '../FeedbackCard';
import { FeedbackButtonClickType } from '../FeedbackCard/types';
import { IFeedbackListProps } from './types';

const FeedbackList: React.FC<IFeedbackListProps> = (props) => {
  const {
    feedbacks, onCompleteFeedback, onAcceptFeedback, onRejectFeedback,
  } = props;

  if (!feedbacks.length) {
    return (
      <Empty description="Заявок пока нет" />
    );
  }

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        pageSize: 10,
      }}
      dataSource={feedbacks}
      renderItem={(feedback) => (
        <List.Item key={feedback.id}>
          <FeedbackCard
            feedback={feedback}
            onComplete={onCompleteFeedback}
            onAccept={onAcceptFeedback}
            onReject={onRejectFeedback}
          />
        </List.Item>
      )}
    />
  );
};

export default FeedbackList;
