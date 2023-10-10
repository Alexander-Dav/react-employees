import { EmpLoyee } from '@prisma/client';
import { api } from './api';

const employeesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllEmployees: builder.query<EmpLoyee[], void>({
      query: () => ({
        url: '/employees',
        method: 'GET',
      }),
    }),
    getEmployee: builder.query<EmpLoyee, string>({
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'GET',
      }),
    }),
    editEmployee: builder.mutation<string, EmpLoyee>({
      query: (employee) => ({
        url: `/employees/edit/${employee.id}`,
        method: 'PUT',
        body: employee,
      }),
    }),
    removeEmployee: builder.mutation<string, string>({
      query: (id) => ({
        url: `/employees/remove/${id}`,
        method: 'POST',
        body: { id },
      }),
    }),
    addEmployee: builder.mutation<EmpLoyee, EmpLoyee>({
      query: (empLoyee) => ({
        url: `/employees/add`,
        method: 'POST',
        body: empLoyee,
      }),
    }),
  }),
});

export const {
  useGetAllEmployeesQuery,
  useGetEmployeeQuery,
  useEditEmployeeMutation,
  useRemoveEmployeeMutation,
  useAddEmployeeMutation,
} = employeesApi;

export const {
  endpoints: { getAllEmployees, getEmployee, editEmployee, removeEmployee, addEmployee },
} = employeesApi;
