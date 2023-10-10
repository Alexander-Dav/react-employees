import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Paths } from './paths';
import Login from './pages/login';
import { ConfigProvider, theme } from 'antd';
import Register from './pages/register';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Employees } from './pages/employees';
import { Status } from './pages/status';
import { AddEmployee } from './pages/add-employee';
import { Employee } from './components/employee';
import { EditEmployee } from './pages/edit-employee';

const router = createBrowserRouter([
  { path: Paths.home, element: <Employees /> },
  { path: Paths.login, element: <Login /> },
  { path: Paths.register, element: <Register /> },
  { path: Paths.employeeAdd, element: <AddEmployee /> },
  { path: `${Paths.status}/:status`, element: <Status /> },
  { path: `${Paths.employee}/:id`, element: <Employee /> },
  { path: `${Paths.employeeEdit}/:id`, element: <EditEmployee /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
