import { FC } from 'react';

type TableProps = JSX.IntrinsicElements['table'];

export const Table: FC<TableProps> = ({ children }) => {
  return (
    <table>
      {children}
      {/* <thead>
        <tr>
          {}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.age}</td>
          </tr>
        ))}
      </tbody> */}
    </table>
  );
};
