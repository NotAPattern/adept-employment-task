import { companyModel } from 'src/entites/company';
import { employeeModel } from 'src/entites/employee';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useSelectedCompaniesIds } from 'src/entites/company/model';

export const DeleteSelectedCompanies: FC = () => {
  const dispatch = useDispatch();
  const selectedCompaniesIds = useSelectedCompaniesIds();

  const isDisabled = Object.keys(selectedCompaniesIds).length === 0;

  return (
    <button
      disabled={isDisabled}
      onClick={() => {
        dispatch(companyModel.deleteSelectedCompanies());
        dispatch(employeeModel.deleteEmployes({ companiesIds: Object.keys(selectedCompaniesIds) as unknown as number[] }));
      }}
    >
      delete
    </button>
  );
};
    