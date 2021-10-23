import React from 'react';
import {
  Form, Input, Select, DatePicker, Upload, Button,
} from 'antd';
import moment from 'moment';
import { UploadOutlined } from '@ant-design/icons';
import { useAppSelector } from '../../../../../../hooks';
import { IEditUserProfileForm } from '../../types';

const { Option } = Select;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const EditUserProfileForm: React.FC<IEditUserProfileForm> = ({ editProfile, profileData, form }) => {
  const companies = useAppSelector((state) => state.companies.data);
  const technologies = useAppSelector((state) => state.technologies.data);
  const companyId = companies.find((company) => company.title === profileData.company)?.id;
  const technologiesTitles = profileData.technologies.map((tech) => tech.title);

  React.useEffect(() => {
    form.resetFields();
  }, [profileData]);

  const children = [];
  for (let i = 0; i < technologies.length; i += 1) {
    children.push(<Option value={technologies[i].title} key={technologies[i].id}>{technologies[i].title}</Option>);
  }

  const handleUploadFile = (photo: any) => false;

  function disabledDate(current: any) {
    return current && current > moment();
  }

  return (
    <Form
      form={form}
      name="edit-user"
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={editProfile}
      autoComplete="off"
    >
      <Form.Item
        key="firstname"
        label="Имя"
        name="firstname"
        initialValue={profileData.firstname}
      >
        <Input />
      </Form.Item>
      <Form.Item
        key="lastname"
        label="Фамилия"
        name="lastname"
        initialValue={profileData.lastname}
      >
        <Input />
      </Form.Item>
      {profileData.isMentor && (
        <>
          <Form.Item
            key="careerStart"
            label="Начало карьеры"
            name="careerStart"
            rules={[
              {
                required: !profileData.careerStart,
                message: 'Введите дату начала работы',
              },
            ]}
          >
            <DatePicker format="YYYY-MM-DD" disabledDate={disabledDate} />
          </Form.Item>
          <Form.Item
            key="companyId"
            label="Место работы"
            name="companyId"
            rules={[
              {
                required: !profileData.company,
                message: 'Введите дату начала работы',
              },
            ]}
            initialValue={companyId}
          >
            <Select>
              {companies.map((company) => (
                <Select.Option key={company.id} value={company.id}>{company.title}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Должность"
            name="position"
            initialValue={profileData.position}
            rules={[
              {
                required: !profileData.position,
                message: 'Введите дату начала работы',
              },
            ]}
          >
            <Input placeholder="Старший разработчик" />
          </Form.Item>
        </>
      )}

      <Form.Item
        key="description"
        label="О себе"
        name="description"
        initialValue={profileData.description}
      >
        <Input.TextArea showCount maxLength={500} />
      </Form.Item>
      <Form.Item
        key="technologies"
        label="Технологии"
        name="technologies"
        initialValue={technologiesTitles}
      >
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: '100%' }}
        >
          {children}
        </Select>
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
    </Form>
  );
};

export default EditUserProfileForm;
