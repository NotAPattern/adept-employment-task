import { Employee } from 'src/shared/api';

export type EmployeeChangableKeys = keyof Omit<Employee, 'id'>;