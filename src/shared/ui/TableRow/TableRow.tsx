import { FC, JSX } from 'react';

type TableRowProps = JSX.IntrinsicElements['tr'];

export const TableRow: FC<TableRowProps> = ({ children }) => {
  return <tr>{children}</tr>;
};
