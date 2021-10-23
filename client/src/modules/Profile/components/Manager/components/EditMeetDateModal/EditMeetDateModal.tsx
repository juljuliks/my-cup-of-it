import React, { useState } from 'react';
import {
  Modal, Input, DatePicker, TimePicker, Form,
} from 'antd';
import moment from 'moment';
import { IEditMeetDateModalProps } from '../types';
import { getDate, getTime } from '../../../../getMeetDate';

const { TextArea } = Input;

const EditMeetDateModal: React.FC<IEditMeetDateModalProps> = ({
  meet, isModalVisible, setIsModalVisible, changeMeetsDate,
}) => {
  const [isRequired, setIsRequired] = useState(false);
  const [form] = Form.useForm();

  function disabledDate(current: any) {
    return current && current < moment();
  }

  function disabledHours() {
    const arr = [];
    for (let i = 0; i < 23; i++) {
      if (i < 8 || i > 20) {
        arr.push(i);
      }
    }
    return arr;
  }

  function handleOk(values: any) {
    changeMeetsDate(meet, values);
    setIsRequired(false);
    form.resetFields();
    setIsModalVisible(false);
  }

  function handleCancel() {
    setIsModalVisible(false);
    setIsRequired(false);
    form.resetFields();
  }

  return (
    <>
      <Modal
        title={`${meet.firstname} предлагает встретиться ${getDate(meet.date)} в ${getTime(meet.date)}. Подтвердите или внесите изменения`}
        okText="Подтвердить"
        cancelText="Отменить"
        visible={isModalVisible}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              handleOk(values);
            });
        }}
        onCancel={() => handleCancel()}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >
          <Form.Item
            label="Ваше сообщение:"
            name="comment"
            labelCol={{
              span: 7,
            }}
          >
            <TextArea rows={4} maxLength={140} />
          </Form.Item>

          <Form.Item
            label="Датa встречи"
            name="date"
            labelCol={{
              span: 6,
            }}
          >
            <DatePicker
              placeholder="Выберите дату"
              disabledDate={disabledDate}
              format="DD-MM-YYYY"
              onChange={() => setIsRequired(true)}
            />
          </Form.Item>
          <Form.Item
            label="Время встречи"
            name="time"
            labelCol={{
              span: 6,
            }}
            rules={[
              {
                required: isRequired,
                message: 'Введите время встречи',
              },
            ]}
          >
            <TimePicker
              placeholder="Выберите время"
              format="HH:mm"
              minuteStep={15}
              hideDisabledOptions
              disabledHours={disabledHours}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditMeetDateModal;
