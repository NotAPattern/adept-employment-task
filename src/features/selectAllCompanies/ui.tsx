import { FC, useRef } from 'react';
import { Checkbox } from 'src/shared/ui';
import { companyModel } from 'src/entites/company';
import { useDispatch } from 'react-redux';

export const SelectAllCompanies: FC = () => {
  const dispatch = useDispatch();
  const selectedCompaniesIds = companyModel.useSelectedCompaniesIds();

  const checkboxRef = useRef<HTMLInputElement>(null);

  const selectedCompaniesIdsKeys = Object.keys(selectedCompaniesIds);
  const isSelectedAll = selectedCompaniesIdsKeys.length === 0 || selectedCompaniesIdsKeys.some(id => selectedCompaniesIds[id as unknown as number] !== true); 

  return (
    <Checkbox
      checked={!isSelectedAll}
      label={'Выделить все'}
      onChange={() => {
        dispatch(companyModel.selectAllCompanies());
      }}
      ref={checkboxRef}
    />
  );
};
