import React from 'react';
import {
  Form, Input,
} from 'antd';

import { IEditSocialsForm } from '../../types';

const EditSocialForm: React.FC<IEditSocialsForm> = ({ editSocials, socials, form }) => {
  const socialTitles = {
    Telegram: 'https://t.me/',
    WhatsApp: 'https://wa.me/',
    LinkedIn: 'https://linkedin.com/in/',
  };

  const objectFromSocials: any = {};

  socials.forEach((el) => {
    const [[key, value]] = Object.entries(el);
    objectFromSocials[key] = value;
  });

  const socialItems = { ...socialTitles, ...objectFromSocials };

  return (
    <Form
      form={form}
      name="edit-user"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 20,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={editSocials}
      autoComplete="off"
    >

      <Form.Item
        key="1"
        label="Telegram"
        name="Telegram"
        initialValue={`${socialItems.Telegram.split('/')[socialItems.Telegram.split('/').length - 1]}`}
      >
        <Input addonBefore="https://t.me/" placeholder="username" />
      </Form.Item>

      <Form.Item
        key="2"
        label="WhatsApp"
        name="WhatsApp"
        initialValue={`${socialItems.WhatsApp.split('/')[socialItems.WhatsApp.split('/').length - 1]}`}
      >
        <Input addonBefore="https://wa.me/" placeholder="79876543210" />
      </Form.Item>

      <Form.Item
        key="3"
        label="LinkedIn"
        name="LinkedIn"
        initialValue={`${socialItems.LinkedIn.split('/')[socialItems.LinkedIn.split('/').length - 1]}`}
      >
        <Input addonBefore="https://linkedin.com/in/" placeholder="username" />
      </Form.Item>

    </Form>
  );
};

export default EditSocialForm;
