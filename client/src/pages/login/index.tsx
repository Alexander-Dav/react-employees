import React from 'react';
import Layout from '../../components/layout';
import CustomInput from '../../components/custom-input';
import { Card, Form, Row, Space, Typography } from 'antd';
import PasswordInput from '../../components/password-input';
import CustomButton from '../../components/custom-button';
import { Link } from 'react-router-dom';
import { Paths } from '../../paths';

const Login = () => {
  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Войдите" style={{ width: '30rem' }}>
          <Form onFinish={() => null}>
            <CustomInput type="email" name="email" placeholder="email" />
            <PasswordInput name="password" placeholder="password" />
            <CustomButton type="primary" htmlType="submit">
              Войдите
            </CustomButton>
          </Form>
          <Space>
            <Typography.Text>
              Нет аккаунта? <Link to={Paths.register}>Зарегистрируйтесь</Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};

export default Login;
