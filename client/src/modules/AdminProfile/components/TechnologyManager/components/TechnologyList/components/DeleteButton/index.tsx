import { Button, Popconfirm, message } from 'antd';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { ICompany } from '../../../../../../../../types/companiesTypes';
import { useAppDispatch } from '../../../../../../../../hooks';
import { actions } from '../../../../../../../../redux/slices';
import { ITechnology } from '../../../../../../../../types/technologiesTypes';

interface IDeleteButtonProps {
  technology: ITechnology
}

const DeletePopConfirm: React.FC<IDeleteButtonProps> = (props) => {
  const { technology } = props;

  const dispatch = useAppDispatch();

  function confirm(e: any) {
    dispatch(actions.deleteTechnologyPending({ id: technology.id }));
    message.success('Удалено');
  }

  function cancel(e: any) {
    message.error('Вы отменили удаление');
  }

  return (
    <Popconfirm
      title="Удалить компанию??"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Удалить"
      cancelText="Отмена"
    >
      <Button danger>Удалить</Button>
    </Popconfirm>
  );
};

export default DeletePopConfirm;
