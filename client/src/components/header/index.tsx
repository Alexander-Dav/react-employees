import React from 'react';
import styles from './index.module.css';
import { Layout, Space, Button, Typography } from 'antd';
import { LoginOutlined, LogoutOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import CustomButton from '../custom-button';
import { Link, useNavigate } from 'react-router-dom';
import { Paths } from '../../paths';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/auth/authSlice';

const Header = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <Layout.Header className={styles.header} style={{ background: 'none' }}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to={Paths.home}>
          <Typography.Title level={1}>Сотрудники </Typography.Title>
        </Link>
      </Space>
      {user ? (
        <CustomButton type="primary" icon={<LogoutOutlined />} onClick={onLogoutClick}>
          Выйти
        </CustomButton>
      ) : (
        <Space>
          <Link to={Paths.register} style={{ color: 'white' }}>
            <UserOutlined className={styles.teamIcon} />
            Зарегистрироваться
          </Link>
          <Link to={Paths.login} style={{ color: 'white' }}>
            <LoginOutlined className={styles.teamIcon} /> Войти
          </Link>
        </Space>
      )}
    </Layout.Header>
  );
};

export default Header;
