import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { employeeModel } from '../index'; 
import styles from './EmployeeRow.module.sass';

type EmployeeRowProps = JSX.IntrinsicElements['tr'] & {
  lastName?: ReactNode;
  firstName?: ReactNode;
  position?: ReactNode;
  checkbox: ReactNode;
  employeeId: number;
  companyId: number;
};

export const EmployeeRow: FC<EmployeeRowProps> = ({
  checkbox,
  companyId,
  employeeId,
  firstName,
  lastName,
  position,
}) => {
  const isSelected = employeeModel.useSelectedEmployee(companyId, employeeId);

  return (
    <tr
      className={clsx({
        [styles['EmployeeRow']]:             true,
        [styles['EmployeeRow_selected']]:    isSelected })}
    >
      <td>{checkbox}</td>
      <td>{lastName}</td>
      <td>{firstName}</td>
      <td>{position}</td>
    </tr>
  );
};

