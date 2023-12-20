import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { companyModel } from 'src/entites/company';
import styles from './CompanyRow.module.sass';

type CompanyRowProps = JSX.IntrinsicElements['tr'] & {
  address: ReactNode;
  checkbox: ReactNode;
  employesCount: ReactNode;
  companyId: number;
  name: ReactNode;
};

export const CompanyRow: FC<CompanyRowProps> = ({
  address,
  checkbox,
  companyId,
  employesCount,
  name,
}) => {
  const isSelected = companyModel.useSelectedCompanyId(companyId);

  return (
    <tr
      className={clsx({
        [styles['CompanyRow']]:          true,
        [styles['CompanyRow_selected']]: isSelected })}
    >
      <td>{checkbox}</td>
      <td>{name}</td>
      <td>{employesCount}</td>
      <td>{address}</td>
    </tr>
  );
};
