import { FC, JSX } from 'react';

type TableHeadCellProps = JSX.IntrinsicElements['th'];

export const TableHeadCell: FC<TableHeadCellProps> = ({
  children, key 
}) => {
  return <th key={`table-cell-${key}`}>{children}</th>;
};

