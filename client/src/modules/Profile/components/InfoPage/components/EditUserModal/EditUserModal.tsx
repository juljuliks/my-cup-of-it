import React, { useState } from 'react';

import { Form, Modal, Button } from 'antd';
import { IEditUserProfile } from '../../types';
import EditUserProfileForm from './EditUserForm';

const EditUserProfileModal: React.FC<IEditUserProfile> = ({ editProfile, profileData }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const onCreate = (values: any) => {
    setIsModalVisible(false);
    editProfile(values);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={showModal} style={{ width: '100%' }}>
        Редактировать профиль
      </Button>

      <Modal
        title="Редактирование профиля"
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
        width={1000}
      >
        <EditUserProfileForm editProfile={editProfile} profileData={profileData} form={form} />
      </Modal>
    </>
  );
};

export default EditUserProfileModal;
