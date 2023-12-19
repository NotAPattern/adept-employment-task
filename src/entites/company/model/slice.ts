import {
  createSelector,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import { normalize, schema } from 'normalizr';
import { Company } from 'src/shared/api';
import { useSelector } from 'react-redux';

type NormalizedCompany = Record<number, Company>;
type NormalizedSelectedCompanies = Record<number, boolean>;

const companySchema = new schema.Entity<Company>('companies');

export const normalizeCompany = (data: Company) => {
  return normalize<Company, { companies: NormalizedCompany }>(
    data,
    companySchema
  );
};

export const normalizeCompanies = (data: Company[]) => {
  return normalize<Company, { companies: NormalizedCompany }>(data, [companySchema]);
};

export const normalizeSelectedCompanies = (data: number[]) => {
  return data.reduce<{ [k in number]: boolean }>((acc, item) => {
    acc[item] = true;
    return acc;
  }, {});
};

export const initialState: {
  data: NormalizedCompany;
  selectedCompanies: NormalizedSelectedCompanies;
} = {
  data:              [],
  selectedCompanies: [],
};

export const companyModel = createSlice({
  initialState,
  name:     'companies',
  reducers: {
    addCompanies: (
      state,
      {
        payload,
      }: PayloadAction<{ companies: Company[]; selectedCompanies: number[] }>
    ) => {
      const companies = normalizeCompanies(payload.companies).entities
        .companies;
      const selectedCompanies = normalizeSelectedCompanies(
        payload.selectedCompanies
      );
      state.data = companies;
      state.selectedCompanies = selectedCompanies;
    },
    changeCompanyAddress: ({ data }, { payload }: PayloadAction<{id: number, value: string}>) => {
      data[payload.id].address = payload.value;
    },
    changeCompanyEmployesCount: ({ data }, { payload }: PayloadAction<{id: number, value: number}>) => {
      data[payload.id].employesCount = payload.value;
    },
    changeCompanyName: ({ data }, { payload }: PayloadAction<{id: number, value: string}>) => {
      data[payload.id].name = payload.value;
    },
    changeSelectCompany: (
      { selectedCompanies },
      { payload: companyId }: PayloadAction<number>
    ) => {
      selectedCompanies[companyId] = !selectedCompanies[companyId];
    },
  },
});

export const { addCompanies, changeCompanyName, changeSelectCompany } = companyModel.actions;

export const useCompany = (companyId: number) =>
  useSelector(
    createSelector(
      (state: RootState) => state.companies.data,
      (companies) => companies[companyId]
    )
  );

export const useCompanies = () =>
  useSelector((state: RootState) => state.companies.data);

export const useSelectedCompanies = () =>
  useSelector((state: RootState) => state.companies.selectedCompanies);

export const useSelectedCompany = (id: number) =>
  useSelector((state: RootState) => state.companies.selectedCompanies[id]);

// export const useCompaniesMemo = createSelector([(state: RootState) => state.companies.data], (data) => data);

export const reducer = companyModel.reducer;
