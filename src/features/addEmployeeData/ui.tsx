import { FC, useState } from 'react';
import { Employee } from 'src/shared/api';
import { employeeModel } from 'src/entites/employee';
import { TextField } from 'src/shared/ui';
import { useDispatch } from 'react-redux';

const initState: Employee = {
  firstName: '',
  id:        0,
  lastName:  '',
  position:  '',
};

type AddEmployeeRowProps = {
  companyId: number;
};

export const AddEmployeeRow: FC<AddEmployeeRowProps> = ({ companyId }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState<Employee>(initState);

  return (
    <tr >
      <td>
        <button
          disabled={data.firstName?.length === 0 || data.position?.length === 0}
          onClick={() => {
            dispatch(employeeModel.addEmployee({
              companyId,
              employee: data
            }));
            setData(initState);
          }}
        >
          +
        </button>
      </td>
      <td>
        <TextField
          onChange={(value) => setData({
            ...data,
            lastName: value
          })}
          value={data?.lastName}
        />
      </td>
      <td>
        <TextField
          onChange={(value) => setData({
            ...data,
            firstName: value
          })}
          value={data?.firstName}
        />
      </td>
      <td>
        <TextField
          onChange={(value) => setData({
            ...data,
            position: value
          })}
          value={data?.position}
        />
      </td>
    </tr>
  );
};