import React, { useState } from 'react';
import {
  Modal, Button, Form, Input,
} from 'antd';
import { IEditCompanyData, HandleSubmitEditCompanyFormType, IEditButtonProp } from './types';
import { ICompany } from '../../../../../../../../types/companiesTypes';
import { useAppDispatch } from '../../../../../../../../hooks';
import { actions } from '../../../../../../../../redux/slices';

const EditButton: React.FC<IEditButtonProp> = (props) => {
  const { company } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [initialFormValues, setInitialFormValues] = useState<IEditCompanyData>({ title: '' });

  const dispatch = useAppDispatch();

  const showModal = () => {
    setIsModalVisible(true);
    setInitialFormValues((prevState) => ({ ...prevState, title: company.title }));
  };

  const handleSubmitForm: HandleSubmitEditCompanyFormType = (values) => {
    dispatch(actions.editCompanyPending({ ...company, ...values }));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setInitialFormValues(() => ({ title: '' }));
  };

  return (
    <>
      <Button onClick={showModal}>
        Редактировать
      </Button>
      <Modal
        title="Редактирование"
        visible={isModalVisible}
        onCancel={handleCancel}
        okText="Сохранить"
        cancelText="Отменить"
        closable
        footer={[
          <Button type="primary" form="editCompanyForm" key="submit" htmlType="submit">
            Сохранить
          </Button>,
          <Button form="editCompanyForm" key="cancel" htmlType="button" onClick={handleCancel}>
            Отмена
          </Button>,
        ]}
      >
        <Form
          name="editCompanyForm"
          labelCol={{
            span: 6,
          }}
          initialValues={initialFormValues}
          onFinish={handleSubmitForm}
          autoComplete="off"
        >
          <Form.Item
            label="Название"
            name="title"
            rules={[
              {
                required: true,
                message: 'Введите новое название компании',
              },
            ]}
          >
            <Input />
          </Form.Item>

        </Form>
      </Modal>
    </>
  );
};

export default EditButton;
