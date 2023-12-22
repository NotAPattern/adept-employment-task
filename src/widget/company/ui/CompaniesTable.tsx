import {
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableRow
} from 'src/shared/ui';
import { AddCompanyRow } from 'src/features/addCompanyData';
import { ChangeCompanyProperty } from 'src/features/changeCompanyProperty';
import { CompanyEmployesCount } from 'src/features/showCompanyEmployesCount';
import { companyModel } from 'src/entites/company';
import { CompanyRow } from 'src/entites/company/ui/companyRow';
import { FC } from 'react';
import { SelectAllCompanies } from 'src/features/selectAllCompanies';
import SelectCompany from 'src/features/selectCompanyRow/ui';

export const CompaniesTable: FC = () => {
  const companiesIds = companyModel.useCompaniesIds();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>{<SelectAllCompanies />}</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <AddCompanyRow/>

        {companiesIds.map((id: number | null) => {
          return (
            id &&
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
                employesCount={
                  <CompanyEmployesCount id={id}/>}
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
