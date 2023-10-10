import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout';
import { EmployeeForm } from '../../components/employee-form';
import { Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../../features/auth/authSlice';
import { addEmployee, useAddEmployeeMutation } from '../../app/services/employees';
import { EmpLoyee } from '@prisma/client';
import { Paths } from '../../paths';
import { isErrorWithMessage } from '../../utils/is-error-with-message';
import { useSelector } from 'react-redux';

export const AddEmployee = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [addEmployee] = useAddEmployeeMutation();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [navigate, user]);

  const handleAddEmployee = async (data: EmpLoyee) => {
    try {
      await addEmployee(data).unwrap();
      navigate(`${Paths.status}/created`);
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
        <EmployeeForm
          title="Добавить сотрудника"
          btnText="Добавить"
          onFinish={handleAddEmployee}
          error={error}
        />
      </Row>
    </Layout>
  );
};
