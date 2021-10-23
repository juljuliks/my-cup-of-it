import React from 'react';
import {
  Form, Input, Button,
} from 'antd';
import { IFeedbackForm } from './types';

const FeedbackForm: React.FC<IFeedbackForm> = ({ form, onFinish }) => (
  <Form
    form={form}
    name="feedbackForm"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
      name="title"
      label="Тема"
      rules={[{
        required: true,
        message: 'Введите тему обращения',
      }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      name="description"
      label="Описание"
    >
      <Input.TextArea />
    </Form.Item>

  </Form>
);

export default FeedbackForm;
