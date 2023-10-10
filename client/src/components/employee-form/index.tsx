import { EmpLoyee } from '@prisma/client';
import { Card, Form, Space } from 'antd';
import React from 'react';
import CustomInput from '../custom-input';
import ErrorMessage from '../error-message';
import CustomButton from '../custom-button';

type Props<T> = {
  onFinish: (value: T) => void;
  btnText: string;
  title: string;
  error?: string;
  employee?: T;
};

export const EmployeeForm = ({ onFinish, title, btnText, error, employee }: Props<EmpLoyee>) => {
  return (
    <Card title={title} style={{ width: '30rem' }}>
      <Form name="emloyee-form" onFinish={onFinish} initialValues={employee}>
        <CustomInput type="text" name="firstName" placeholder="Имя" />
        <CustomInput type="text" name="lastName" placeholder="Фамилия" />
        <CustomInput type="number" name="age" placeholder="Возвраст" />
        <CustomInput type="text" name="address" placeholder="Адрес" />
        <Space>
          <ErrorMessage message={error} />
          <CustomButton htmlType="submit">{btnText}</CustomButton>
        </Space>
      </Form>
    </Card>
  );
};
