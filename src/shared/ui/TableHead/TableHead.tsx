import { FC, JSX } from 'react';

type TableHeadProps = JSX.IntrinsicElements['thead'];

export const TableHead: FC<TableHeadProps> = ({ children }) => {
  return <thead>{children}</thead>;
};
