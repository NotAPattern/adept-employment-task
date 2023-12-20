import { employeeModel, EmployeeRow } from 'src/entites/employee';
import {
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableRow
} from 'src/shared/ui';
import { ChangeEmployeeProperty } from 'src/features/changeEmployeeProperty';
import { FC } from 'react';
import { SelectAllEmployes } from 'src/features/selectAllEmployes';
import { SelectEmployee } from 'src/features/selectEmployeeRow';

type EmployesTableProps = {
  companyId: number | null;
};

export const EmployesTable: FC<EmployesTableProps> = ({ companyId }) => {
  if (companyId === null) return null;
  const employesIds = employeeModel.useEmployesIds(companyId);

  if (!employesIds) return null;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>{<SelectAllEmployes companyId={companyId}/>}</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {employesIds.map((id) => {
          return (
            <EmployeeRow
              checkbox={
                <SelectEmployee
                  companyId={companyId}
                  id={id}
                />
              }
              companyId={companyId}
              employeeId={id}
              firstName={
                <ChangeEmployeeProperty
                  companyId={companyId}
                  id={id}
                  type='firstName'
                />}
              key={`employee-company-${companyId}-row-${id}`}
              lastName={
                <ChangeEmployeeProperty
                  companyId={companyId}
                  id={id}
                  type='lastName'
                />}
              position={
                <ChangeEmployeeProperty
                  companyId={companyId}
                  id={id}
                  type='position'
                />}
            />
          );
        })}
      </TableBody>
    </Table>
  );
};

