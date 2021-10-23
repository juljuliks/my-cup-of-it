import React, { SyntheticEvent } from 'react';

import {
  Menu, Dropdown, message, Button,
} from 'antd';
import { IFeedbackItemProps } from '../FeedbackCard/types';

const CardAction: React.FC<IFeedbackItemProps> = (props) => {
  const {
    feedback, onComplete, onAccept, onReject,
  } = props;

  function handleMenuClick(e: any) {
    e.domEvent.preventDefault();

    switch (e.key) {
      case 'complete':
        onComplete(feedback);
        message.info(`Заявка №${feedback.id} выполнена.`);
        break;

      case 'accept':
        onAccept(feedback);
        message.info(`Заявка №${feedback.id} взята в работу.`);
        break;

      case 'reject':
        onReject(feedback);
        message.info(`Заявка №${feedback.id} отклонена.`);
        break;

      default:
    }
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="complete">
        <Button type="text" style={{ background: 'transparent', paddingLeft: '0' }}>Выполнено</Button>
      </Menu.Item>

      <Menu.Item key="accept">
        <Button type="text" style={{ background: 'transparent', paddingLeft: '0' }}>В работе</Button>
      </Menu.Item>

      <Menu.Item key="reject">
        <Button type="text" style={{ background: 'transparent', paddingLeft: '0' }}>Отклонено</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <Button>...</Button>
    </Dropdown>
  );
};

export default CardAction;
