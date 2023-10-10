import { useState } from 'react';
import Layout from '../../components/layout';
import CustomInput from '../../components/custom-input';
import { Card, Form, Row, Space, Typography } from 'antd';
import PasswordInput from '../../components/password-input';
import CustomButton from '../../components/custom-button';
import { Link, useNavigate } from 'react-router-dom';
import { Paths } from '../../paths';
import { useLoginMutation, UserData } from '../../app/services/auth';
import { isErrorWithMessage } from '../../utils/is-error-with-message';
import ErrorMessage from '../../components/error-message';
const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loginUser, loginUserResult] = useLoginMutation();
  const login = async (data: UserData) => {
    try {
      await loginUser(data).unwrap();
      navigate('/');
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data.message);
      } else {
        setError('Неизвестная ошибка');
      }
    }
  };

  return (
    <Layout>
      <Row align="middle" justify="center">
        <Card title="Войдите" style={{ width: '30rem' }}>
          <Form onFinish={login}>
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
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  );
};

export default Login;
