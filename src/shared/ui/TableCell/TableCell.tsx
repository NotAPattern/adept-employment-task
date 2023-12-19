import { FC, JSX } from 'react';

type TableCellProps = JSX.IntrinsicElements['td'];

export const TableCell: FC<TableCellProps> = ({ children }) => {
  return <td>{children}</td>;
};
