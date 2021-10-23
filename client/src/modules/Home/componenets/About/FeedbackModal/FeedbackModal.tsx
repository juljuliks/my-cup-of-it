import React, { useState } from 'react';
import { Form, Modal, Button } from 'antd';
import { useAppDispatch } from '../../../../../hooks';
import FeedbackForm from './FeedbackForm';
import { FeedbackSubmitType } from './types';
import { actions } from '../../../../../redux/slices';

const FeedbackModal: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useAppDispatch();

  const [form] = Form.useForm();

  const onCreate: FeedbackSubmitType = (values) => {
    setIsModalVisible(false);
    dispatch(actions.addNewFeedbackPending(values));
  };

  return (
    <>
      <Button onClick={() => setIsModalVisible(true)} style={{ width: '100%' }}>
        Обратная связь
      </Button>

      <Modal
        title="Обратная связь"
        visible={isModalVisible}
        okText="Отправить"
        cancelText=" Отменить"
        onCancel={() => setIsModalVisible(false)}
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
        <FeedbackForm form={form} onFinish={onCreate} />
      </Modal>
    </>
  );
};

export default FeedbackModal;
