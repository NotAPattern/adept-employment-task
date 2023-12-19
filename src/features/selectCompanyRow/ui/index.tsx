import { changeSelectCompany, useSelectedCompany } from 'src/entites/company/model';
import { Checkbox } from 'src/shared/ui';
import { FC } from 'react';
import { useDispatch } from 'react-redux';

type SelectCompanyProps = {
  id: number;
  label?: string;
};

const SelectCompany: FC<SelectCompanyProps> = ({
  id,
  label,
}) => {
  const dispatch = useDispatch();
  const isSelected = useSelectedCompany(id);
  return (
    <Checkbox
      checked={isSelected}
      label={label}
      onChange={() => dispatch(changeSelectCompany(id))}
    />
  );
};

export default SelectCompany;
