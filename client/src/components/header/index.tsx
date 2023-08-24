import React from 'react';
import styles from './index.module.css';
import { Layout, Space, Button, Typography } from 'antd';
import { LoginOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import CustomButton from '../custom-button';
import { Link } from 'react-router-dom';
import { Paths } from '../../paths';

const Header = () => {
  return (
    <Layout.Header className={styles.header} style={{ background: 'none' }}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to={Paths.home}>
          <CustomButton ghost={true}>
            <Typography.Title level={1}>Сотрудники </Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      <Space>
        <Link to={Paths.register} style={{ color: 'white' }}>
          <UserOutlined className={styles.teamIcon} />
          Зарегистрироваться
        </Link>
        <Link to={Paths.login} style={{ color: 'white' }}>
          <LoginOutlined className={styles.teamIcon} /> Войти
        </Link>
      </Space>
    </Layout.Header>
  );
};

export default Header;
