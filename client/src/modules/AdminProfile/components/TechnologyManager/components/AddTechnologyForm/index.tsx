import React from 'react';
import {
  Card, Form, Input, Button, Select,
} from 'antd';
import styled from 'styled-components';

import { useAppDispatch } from '../../../../../../hooks';
import { actions } from '../../../../../../redux/slices';
import { HandleSubmitAddTechnologyFormType } from './types';

const { Option } = Select;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
`;

const initialAddCompanyFormValues = {
  category: '',
  title: '',
};

const AddTechnologyForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const onSubmit: HandleSubmitAddTechnologyFormType = (values) => {
    dispatch(actions.addNewTechnologyPending(values));
    form.resetFields();
  };

  return (
    <Container>
      <Card hoverable style={{ width: 500 }}>
        <Form
          name="AddTechnologyForm"
          form={form}
          labelCol={{
            span: 6,
          }}
          initialValues={initialAddCompanyFormValues}
          onFinish={onSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="Категория"
            name="category"
            rules={[
              {
                required: true,
                message: 'Введите название категории',
              },
            ]}
          >
            <Select>
              <Option value="backend">Backend</Option>
              <Option value="frontend">Frontend</Option>
            </Select>

          </Form.Item>
          <Form.Item
            label="Название"
            name="title"
            rules={[
              {
                required: true,
                message: 'Введите название технологии',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Добавить
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Container>
  );
};

export default AddTechnologyForm;
