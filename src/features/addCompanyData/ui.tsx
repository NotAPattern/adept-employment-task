import { FC, useState } from 'react';
import { Company } from 'src/shared/api';
import { companyModel } from 'src/entites/company';
import { TextField } from 'src/shared/ui';
import { useDispatch } from 'react-redux';

export const AddCompanyRow: FC = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState<Company>({
    address:       '',
    employesCount: 0,
    id:            0,
    name:          '',
  });

  return (
    <tr >
      <td>
        <button
          disabled={data.address?.length === 0 || data.name?.length === 0}
          onClick={() => {
            dispatch(companyModel.addCompany({ company: data }));
            setData({
              address:       '',
              employesCount: 0,
              id:            0,
              name:          '',
            });
          }}
        >
          +
        </button>
      </td>
      <td>
        <TextField
          onChange={(value) => setData({
            ...data,
            name: value
          })}
          value={data?.name}
        />
      </td>
      <td>0</td>
      <td>
        <TextField
          onChange={(value) => setData({
            ...data,
            address: value
          })}
          value={data?.address}
        />
      </td>
    </tr>
  );
};