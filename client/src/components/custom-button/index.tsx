import { Button, Form } from 'antd';
import React from 'react';

type Props = {
  children: React.ReactNode;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  type?: 'primary' | 'link' | 'text' | 'default' | 'dashed' | undefined;
  danger?: boolean;
  loading?: boolean;
  ghost?: boolean;
  shape?: 'default' | 'circle' | 'round' | undefined;
  icon?: React.ReactNode;
};

const CustomButton = ({
  children,
  htmlType,
  type,
  danger,
  loading,
  shape,
  ghost,
  icon,
  onClick,
}: Props) => {
  console.log('ghost', ghost);
  return (
    <Form.Item>
      <Button
        htmlType={htmlType}
        type={type}
        danger={danger}
        loading={loading}
        shape={shape}
        ghost={ghost}
        icon={icon}
        onClick={onClick}>
        {children}
      </Button>
    </Form.Item>
  );
};

export default CustomButton;
