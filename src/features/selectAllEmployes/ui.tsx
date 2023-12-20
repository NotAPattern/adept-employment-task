import { FC, useRef } from 'react';
import { Checkbox } from 'src/shared/ui';
import { employeeModel } from 'src/entites/employee';
import { useDispatch } from 'react-redux';

type SelectAllEmployesProps = {
  companyId: number;
};

export const SelectAllEmployes: FC<SelectAllEmployesProps> = ({ companyId }) => {
  const dispatch = useDispatch();
  const selectedCompaniesIds = employeeModel.useSelectedEmployesIds(companyId);

  const checkboxRef = useRef<HTMLInputElement>(null);

  const selectedCompaniesIdsKeys = Object.keys(selectedCompaniesIds);
  const isSelectedAll = selectedCompaniesIdsKeys.length === 0 || selectedCompaniesIdsKeys.some(id => selectedCompaniesIds[id as unknown as number] !== true); 

  return (
    <Checkbox
      checked={!isSelectedAll}
      label={'Выделить все'}
      onChange={() => {
        dispatch(employeeModel.selectAllEmployes({ companyId }));
      }}
      ref={checkboxRef}
    />
  );
};

