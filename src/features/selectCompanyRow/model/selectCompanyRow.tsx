import { changeSelectCompany } from 'src/entites/company/model';
import { Dispatch } from '@reduxjs/toolkit';

export const selectCompanyRow = (companyId: number) => (dispatch: Dispatch) => {
  dispatch(changeSelectCompany(companyId));
};