import {
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableRow
} from 'src/shared/ui';
import { ChangeCompanyProperty } from 'src/features/changeCompanyProperty';
import { companyModel } from 'src/entites/company';
import { CompanyRow } from 'src/entites/company/ui/companyRow';
import { FC } from 'react';
import SelectCompany from 'src/features/selectCompanyRow/ui';

export const CompaniesTable: FC = () => {
  const companiesIds = companyModel.useCompaniesIds();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>{/* TODO: */}</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {companiesIds.map((id) => {
          return (
            <CompanyRow
              address={
                <ChangeCompanyProperty
                  id={id}
                  type='address'
                />}
              checkbox={
                <SelectCompany
                  id={id}
                />
              }
              companyId={id}
              // TODO: add component
              employesCount={22}
              // company.employesCount}
              key={`company-row-${id}`}
              name={
                <ChangeCompanyProperty
                  id={id}
                  type='name'
                />}
            />
          );
        })}
      </TableBody>
    </Table>
  );
};
