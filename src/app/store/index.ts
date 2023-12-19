import { configureStore } from '@reduxjs/toolkit';

import { companyModel } from 'src/entites/company';

export const store = configureStore({
  reducer: {
    companies: companyModel.reducer,
  },
});