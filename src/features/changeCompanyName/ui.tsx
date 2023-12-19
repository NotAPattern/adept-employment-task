import { useDispatch, useSelector } from 'react-redux';
import { changeCompanyName } from 'src/entites/company/model';
import { FC } from 'react';
import { TextField } from 'src/shared/ui';

type ChangeCompanyNameProps = {
  id: number;
};

export const ChangeCompanyName: FC<ChangeCompanyNameProps> = ({ id }) => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.companies.data[id].name);

  return(
    <TextField
      onChange={(value) => dispatch(changeCompanyName({
        id,
        value
      }))}
      value={name}
    />);
};

