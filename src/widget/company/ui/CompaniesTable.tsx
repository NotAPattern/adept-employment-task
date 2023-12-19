import { FC, useCallback } from 'react';
import {
  Table,
  TableHead,
  TableHeadCell,
  TableRow
} from 'src/shared/ui';
import { ChangeCompanyName } from 'src/features/changeCompanyName';
import { CompanyRow } from 'src/entites/company/ui/companyRow';
import SelectCompany from 'src/features/selectCompanyRow/ui';
import { TableBody } from 'src/shared/ui/TableBody/TableBody';
import { useCompanies } from 'src/entites/company/model';

export const CompaniesTable: FC = () => {
  const companies = useCompanies();

  const sortedCompanies = useCallback(() => {
    return (Object.keys(companies) as unknown as number[]).sort((a, b) => a - b);
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>{/* TODO: */}</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedCompanies().map((id) => {
          const company = companies[id];
          return (
            <CompanyRow
              // TODO: add component
              address={company.address}
              checkbox={
                <SelectCompany
                  id={id}
                />
              }
              // TODO: add component
              companyId={id}
              employesCount={company.employesCount}
              key={`company-row-${company.id}`}
              name={
                <ChangeCompanyName id={id}/>}
            />
          );
        })}
      </TableBody>
    </Table>
  );
};
