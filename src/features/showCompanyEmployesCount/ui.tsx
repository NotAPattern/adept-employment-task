import { companyModel } from 'src/entites/company';
import { FC } from 'react';

type CompanyEmployesCountProps= {
  id: number;
};

export const CompanyEmployesCount: FC<CompanyEmployesCountProps> = ({ id }) => {
  const employesCount = companyModel.useCompanyEmployesCount(id);

  return(
    <div>{employesCount}</div>
  );
};

