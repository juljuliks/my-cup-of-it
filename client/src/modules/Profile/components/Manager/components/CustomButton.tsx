import React from 'react';
import { Button, Popconfirm, message } from 'antd';
import { IMeetButton } from './types';

export const CustomButton: React.FC<IMeetButton> = ({ clickHandler, buttonText }) => (
  <Button onClick={clickHandler} style={{ margin: '0 10px' }}>{buttonText}</Button>
);

export const ShowModalButton: React.FC<IMeetButton> = ({ clickHandler, buttonText }) => (
  <Button onClick={clickHandler} style={{ margin: '0 10px' }}>{buttonText}</Button>
);

export const CustomCancelButton: React.FC<IMeetButton> = ({ clickHandler, buttonText }) => {
  function confirm() {
    message.success('Встреча отменена');
    clickHandler();
  }

  return (
    <Popconfirm
      placement="rightTop"
      title="Вы уверены что хотите отменить встречу? Это действие невозможно отменить"
      onConfirm={confirm}
      okText="Да"
      cancelText="Нет"
    >
      <Button style={{ margin: '0 10px' }}>{buttonText}</Button>
    </Popconfirm>
  );
};
