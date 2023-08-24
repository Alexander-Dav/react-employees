import { Form, Input } from 'antd';
import React from 'react';
import CustomButton from '../custom-button';
type Props = {
  name: string;
  placeholder: string;
  type?: string;
};

const CustomInput = ({ name, placeholder, type }: Props) => {
  return (
    <div>
      <Form.Item
        name={name}
        rules={[{ required: true, message: 'Обязательное поле ' }]}
        shouldUpdate={true}>
        <Input placeholder={placeholder} type={type} size="large" />
      </Form.Item>
    </div>
  );
};

export default CustomInput;
