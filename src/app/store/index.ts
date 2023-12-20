import { configureStore } from '@reduxjs/toolkit';

import { companyModel } from 'src/entites/company';
import { employeeModel } from 'src/entites/employee';

export const store = configureStore({
  reducer: {
    companies: companyModel.reducer,
    employes:  employeeModel.reducer,
  },
});