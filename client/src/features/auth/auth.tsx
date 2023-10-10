import React from 'react';
import { useCurrentQuery } from '../../app/services/auth';

const Auth = ({ children }: { children: JSX.Element }) => {
  const { isLoading } = useCurrentQuery();

  if (isLoading) {
    return <div>Загрузка</div>;
  }
  return children;
};

export default Auth;
