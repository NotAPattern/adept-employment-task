import { useDispatch, useSelector } from 'react-redux';
import { companyModel } from 'src/entites/company';
import { FC } from 'react';
import { TextField } from 'src/shared/ui';

type ChangeCompanyPropertyProps = {
  id: number;
  type: companyModel.CompanyChangableKeys;
};

export const ChangeCompanyProperty: FC<ChangeCompanyPropertyProps> = ({ id, type }) => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.companies.entities[id][type]);

  return(
    <TextField
      onChange={(value) => dispatch(companyModel.changeCompanyProperty({
        id,
        type,
        value
      }))}
      value={name}
    />);
};

