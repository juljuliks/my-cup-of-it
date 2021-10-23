import React, { useState } from 'react';
import {
  Modal, Button, Form, Input,
} from 'antd';
import {
  HandleSubmitEditCompanyFormType, IEditButtonProp, IEditTechnologyData,
} from './types';
import { useAppDispatch } from '../../../../../../../../hooks';
import { actions } from '../../../../../../../../redux/slices';

const EditButton: React.FC<IEditButtonProp> = (props) => {
  const { technology } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [initialFormValues, setInitialFormValues] = useState<IEditTechnologyData>({ category: '', title: '' });

  const dispatch = useAppDispatch();

  const showModal = () => {
    setIsModalVisible(true);
    setInitialFormValues((prevState) => ({ ...prevState, title: technology.title }));
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleSubmitForm: HandleSubmitEditCompanyFormType = (values) => {
    dispatch(actions.editTechnologyPending({ ...technology, ...values }));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setInitialFormValues(() => ({ category: '', title: '' }));
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
