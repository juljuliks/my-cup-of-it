import { Button, Popconfirm, message } from 'antd';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { ICompany } from '../../../../../../../../types/companiesTypes';
import { useAppDispatch } from '../../../../../../../../hooks';
import { actions } from '../../../../../../../../redux/slices';

interface IDeleteButtonProps {
  company: ICompany
}

const DeletePopConfirm: React.FC<IDeleteButtonProps> = (props) => {
  const { company } = props;

  const dispatch = useAppDispatch();

  function confirm(e: any) {
    console.log(e);
    dispatch(actions.deleteCompanyPending({ id: company.id }));
    message.success('Удалено');
  }

  function cancel(e: any) {
    console.log(e);
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
