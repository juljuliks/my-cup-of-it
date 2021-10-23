import {
  Modal, Input, DatePicker, TimePicker, Form,
} from 'antd';
import React from 'react';
import moment from 'moment';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { modalProps, datePickerFunc } from './types';
import { actions } from '../../../../redux/slices';

const { TextArea } = Input;

const KnockingModal: React.FC<modalProps> = ({ mentorId, isModalVisible, setIsModalVisible }) => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.profile);
  const mentor = useAppSelector((state) => state.allUsers.data)
    .filter((user) => user.id === mentorId);

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

  function handleOk(value: any) {
    const { date, time, comment } = value;
    const [selectedDate] = date.toISOString().split('T');
    const selectedTime = time.toISOString().split('T')[1];
    const meetingDate = `${selectedDate}T${selectedTime}`;
    const body = {
      mentorId,
      interviewerId: currentUser.id,
      date: meetingDate,
      status: 'pending',
      comment,
      userEmail: mentor[0].email,
    };
    dispatch(actions.writeUserMeetingPending({ payload: body }));
    setIsModalVisible(false);
  }

  return (
    <>
      <Modal
        title="Заполните данные для встречи"
        okText="Отправить"
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
        onCancel={() => setIsModalVisible(false)}
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
            label="Предложите дату встречи"
            name="date"
            labelCol={{
              span: 11,
            }}
            rules={[
              {
                required: true,
                message: 'Выберите дату встречи',
              },
            ]}
          >
            <DatePicker placeholder="Выберите дату" disabledDate={disabledDate} format="DD-MM-YYYY" />
          </Form.Item>
          <Form.Item
            label="Предложите время встречи"
            name="time"
            labelCol={{
              span: 11,
            }}
            rules={[
              {
                required: true,
                message: 'Выберите время встречи',
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
export default KnockingModal;
