import React, { useState } from 'react';

import { Form, Modal, Button } from 'antd';
import { IEditSocials } from '../../types';
import EditSocialForm from './EditSocialForm';

const EditSocialModal: React.FC<IEditSocials> = ({ editSocials, socials }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const onCreate = (values: any) => {
    setIsModalVisible(false);
    editSocials(values);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal} style={{ width: '100%' }}>
        {socials.length ? 'Редактировать контакты' : 'Добавить контакты'}
      </Button>

      <Modal
        title={socials.length ? 'Редактирование контактов' : 'Добавление контактов'}
        visible={isModalVisible}
        okText="Отправить"
        cancelText=" Отменить"
        onCancel={handleCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            });
        }}
        centered
      >
        <EditSocialForm editSocials={editSocials} socials={socials} form={form} />
      </Modal>
    </>
  );
};

export default EditSocialModal;
