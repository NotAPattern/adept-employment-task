import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './EmployeeRow.module.sass';
import { useSelectedEmployee } from '../model'; 

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
  const isSelected = useSelectedEmployee(companyId, employeeId);

  return (
    <tr
      className={clsx({
        [styles['Employee']]:             true,
        [styles['EmployeeRow_selected']]: isSelected })}
    >
      <td>{checkbox}</td>
      <td>{lastName}</td>
      <td>{firstName}</td>
      <td>{position}</td>
    </tr>
  );
};

