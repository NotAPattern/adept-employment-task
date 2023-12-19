import { FC, JSX } from 'react';

type TableBodyProps = JSX.IntrinsicElements['tbody'];

export const TableBody: FC<TableBodyProps> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

