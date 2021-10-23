import React from 'react';

import {
  Button, Form, Input, Card, Alert,
} from 'antd';

import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { actions } from '../../../../redux/slices';

import { LoginSubmitType } from './types';
import { Container, LinksWrapper, Text } from '../style';

const initialLoginFormValues = {
  email: '',
  password: '',
};

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const onSubmit: LoginSubmitType = (values) => {
    dispatch(actions.loginUserPending(values));
  };

  return (
    <Container>
      <Card hoverable title="Войти" style={{ width: 500 }}>
        <Form
          name="loginForm"
          labelCol={{
            span: 6,
          }}
          initialValues={initialLoginFormValues}
          onFinish={onSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="Ваш email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Введите ваш email',
                type: 'email',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Ваш пароль"
            name="password"
            rules={[
              {
                required: true,
                min: 6,
                message: 'Пароль должен быть не менее 6 символов',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Продолжить
            </Button>
          </Form.Item>

          <LinksWrapper>
            <Text>Еще не зарегистрированы?</Text>
            <Button type="link">
              <Link to="/register">Зарегистрироваться</Link>
            </Button>
          </LinksWrapper>
        </Form>
      </Card>
    </Container>

  );
};

export default LoginPage;
