import React, { useEffect, useRef, useState } from 'react';
import {
  Form, Input, DatePicker, Button, Card, Select, Upload,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import moment from 'moment';
import {
  OnChangeRegisterValuesType, RegisterSubmitType, IRegisterProps,
} from '../../types';
import { actions } from '../../../../redux/slices';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { initialRegisterFormValues } from '../RegisterPage';
import { ButtonsWrapper } from '../style';

const { Option } = Select;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const RegisterStepTwo: React.FC<IRegisterProps> = ({ registerData, setRegisterData, setFormStep }) => {
  const dispatch = useAppDispatch();

  const companies = useAppSelector((state) => state.companies.data);
  const technologies = useAppSelector((state) => state.technologies.data);

  const onSubmit: RegisterSubmitType = (values) => {
    const formdata = new FormData();

    Object.entries({ ...registerData, ...values }).forEach((value) => {
      if (value[1] && value[0] === 'userPhoto') formdata.append(`${value[0]}`, value[1][0].originFileObj);
      else formdata.append(`${value[0]}`, value[1]);
    });

    dispatch(actions.registerUserPending(formdata));
  };

  const handleUploadFile = (photo: any) => false;

  const onChangeRegisterFormValues: OnChangeRegisterValuesType = (changedValues, allValues) => {
    setRegisterData((prevState: any) => ({ ...prevState, ...allValues }));
  };

  function goBack() {
    setFormStep(1);
  }

  const children = [];
  for (let i = 0; i < technologies.length; i += 1) {
    children.push(<Option value={technologies[i].id} key={technologies[i].title}>{technologies[i].title}</Option>);
  }

  useEffect(() => {
    dispatch(actions.getAllCompaniesPending());
    dispatch(actions.getAllTechnologiesPending());
  }, [dispatch]);

  function disabledDate(current: any) {
    return current > moment();
  }

  return (
    <Card hoverable title="Продолжение регистрации" style={{ width: 700 }}>
      <Form
        onValuesChange={onChangeRegisterFormValues}
        name="registerForm2"
        labelCol={{
          span: registerData.isMentor ? 6 : 3,
        }}
        onFinish={onSubmit}
        autoComplete="off"
      >

        {registerData.isMentor && (
          <>
            <Form.Item
              label="Начало карьеры"
              name="careerStart"
              rules={[
                {
                  required: true,
                  message: 'Введите дату начала работы',
                },
              ]}
              initialValue=""
            >
              <DatePicker placeholder="01-01-2021" format="DD-MM-YYYY" disabledDate={disabledDate} />
            </Form.Item>
            <Form.Item
              label="Место работы"
              name="companyId"
              rules={[
                {
                  required: true,
                  message: 'Выберите место работы',
                },
              ]}
            >
              <Select>
                {companies.map((company) => (
                  <Select.Option key={company.title} value={company.id}>{company.title}</Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Должность"
              name="position"
              rules={[
                {
                  required: true,
                  message: 'Введите занимаемую вами позицию',
                },
              ]}
            >
              <Input placeholder="Старший разработчик" />
            </Form.Item>

            <Form.Item
              label="Технологии"
              name="technologies"
              rules={[
                {
                  required: true,
                  message: 'Выберите используемые вами технологии',
                },
              ]}
            >
              <Select
                mode="multiple"
                placeholder="Please select"
                style={{ width: '100%' }}
              >
                {children}
              </Select>
            </Form.Item>
          </>
        )}

        <Form.Item
          label="О себе"
          name="description"
          initialValue=""
        >
          <Input.TextArea showCount maxLength={500} />
        </Form.Item>

        <Form.Item
          name="userPhoto"
          label="Фото"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            name="photo"
            action="/upload.do"
            listType="picture"
            beforeUpload={handleUploadFile}
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Загрузить</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 16,
          }}
        >
          <ButtonsWrapper>
            <Button type="link" htmlType="button" onClick={goBack}>
              Назад
            </Button>
            <Button type="primary" htmlType="submit">
              Продолжить
            </Button>
          </ButtonsWrapper>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default RegisterStepTwo;
