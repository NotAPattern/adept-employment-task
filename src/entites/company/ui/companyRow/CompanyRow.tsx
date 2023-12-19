import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './CompanyRow.module.sass';
import { useSelectedCompany } from '../../model';

type CompanyRowProps = JSX.IntrinsicElements['tr'] & {
  address: ReactNode;
  checkbox: ReactNode;
  employesCount: number;
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
  const isSelected = useSelectedCompany(companyId);

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
