import { useDispatch, useSelector } from 'react-redux';
import { employeeModel } from 'src/entites/employee';
import { FC } from 'react';
import { TextField } from 'src/shared/ui';

type ChangeEmployeePropertyProps = {
  companyId: number;
  id: number;
  type: employeeModel.EmployeeChangableKeys;
};

export const ChangeEmployeeProperty: FC<ChangeEmployeePropertyProps> = ({ companyId, id, type }) => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.employes.entities[companyId][id][type]);

  return(
    <TextField
      onChange={(value) => dispatch(employeeModel.changeEmployProperty({
        companyId,
        id,
        type,
        value
      }))}
      value={name}
    />);
};