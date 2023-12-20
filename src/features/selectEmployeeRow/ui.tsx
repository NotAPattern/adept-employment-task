import { Checkbox } from 'src/shared/ui';
import { employeeModel } from 'src/entites/employee';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

type SelectEmployeeProps = {
  companyId: number;
  id: number;
  label?: string;
};

export const SelectEmployee: FC<SelectEmployeeProps> = ({
  companyId,
  id,
  label,
}) => {
  const dispatch = useDispatch();
  const isSelected = employeeModel.useSelectedEmployee(companyId, id);
  return (
    <Checkbox
      checked={isSelected ?? false}
      key={`Employee-checkbox-key-${id}`}
      label={label}
      onChange={() => dispatch(employeeModel.changeSelectEmployee({
        companyId: companyId,
        id:        id
      }))}
    />
  );
};
