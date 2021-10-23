import React from 'react';
import {
  Card, Form, Input, Button,
} from 'antd';
import styled from 'styled-components';

import { useAppDispatch } from '../../../../../../hooks';
import { actions } from '../../../../../../redux/slices';
import { HandleSubmitAddCompanyFormType } from './types';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
`;

const initialAddCompanyFormValues = {
  title: '',
};

const AddCompanyForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [form] = Form.useForm();

  const onSubmit: HandleSubmitAddCompanyFormType = (values) => {
    dispatch(actions.addNewCompanyPending(values));
    form.resetFields();
  };

  return (
    <Container>
      <Card hoverable style={{ width: 500 }}>
        <Form
          name="AddCompanyForm"
          form={form}
          labelCol={{
            span: 6,
          }}
          initialValues={initialAddCompanyFormValues}
          onFinish={onSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="Название"
            name="title"
            rules={[
              {
                required: true,
                message: 'Введите название компании',
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

export default AddCompanyForm;
