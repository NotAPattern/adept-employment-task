import { Checkbox } from 'src/shared/ui';
import { companyModel } from 'src/entites/company';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

type SelectCompanyProps = {
  id: number;
  label?: string;
};

const SelectCompany: FC<SelectCompanyProps> = ({ id, label }) => {
  const dispatch = useDispatch();
  const isSelected = companyModel.useSelectedCompanyId(id);
  return (
    <Checkbox
      checked={isSelected}
      key={`company-checkbox-key-${id}`}
      label={label}
      onChange={() => {
        dispatch(companyModel.changeSelectCompany(id));
        dispatch(companyModel.changeCurrentSelectId(id));
      }}
    />
  );
};

export default SelectCompany;
