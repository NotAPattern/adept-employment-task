import {
  createSelector,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import { addAndSort } from 'src/shared/utils';
import { Company } from 'src/shared/api';
import { CompanyChangableKeys } from './types';
import { useSelector } from 'react-redux';

export const initialState: {
  entities: Record<number, Company>;
  ids: number[];
  selectedCompaniesIds: Record<number, boolean>;
  currentSelectId: number | null;
} = {
  currentSelectId:      null,
  entities:             {},
  ids:                  [],
  selectedCompaniesIds: {},
};

export const companyModelSlice = createSlice({
  initialState: initialState,
  name:         'companies',
  reducers:     {
    addCompanies: (
      state,
      {
        payload,
      }: PayloadAction<{ companies: Company[]; selectedCompaniesIds?: number[] }>
    ) => {
      for (const company of payload.companies) {
        state.entities[company.id] = company;
        state.ids = addAndSort(state.ids, company.id);
      }
      if(payload.selectedCompaniesIds){
        for (const selectedCompanyId of payload.selectedCompaniesIds) {
          state.selectedCompaniesIds[selectedCompanyId] = true;
        }
      }
    },
    changeCompanyEmployesCount: ({ entities }, { payload }: PayloadAction<{id: number, value: number}>) => {
      entities[payload.id].employesCount = payload.value;
    },
    changeCompanyProperty: ({ entities }, { payload }: PayloadAction<{id: number, value: string, type: CompanyChangableKeys}>) => {
      entities[payload.id][payload.type] = payload.value;
    },
    changeCurrentSelectId: (
      state,
      { payload: companyId }: PayloadAction<number>
    ) => {
      state.currentSelectId = null;
      let selectedCount = 0;
      for(const [, value] of Object.entries(state.selectedCompaniesIds)) {
        if (value === true) { selectedCount++;}
      }
      if(selectedCount === 1) {
        state.currentSelectId = companyId;
      }
    },
    changeSelectCompany: (
      { selectedCompaniesIds },
      { payload: companyId }: PayloadAction<number>
    ) => {
      selectedCompaniesIds[companyId] = !selectedCompaniesIds[companyId];
    },
    selectAllCompanies: (
      { entities, selectedCompaniesIds },
    ) => {
      const selectedCompaniesIdsKeys = Object.keys(selectedCompaniesIds);
      const isSelectedAll = selectedCompaniesIdsKeys.length === 0 || selectedCompaniesIdsKeys.some(id => selectedCompaniesIds[id as unknown as number] !== true); 
      for (const id of Object.keys(entities) as unknown as number[]) {
        selectedCompaniesIds[id] = isSelectedAll;
      }
    },
  },
});

export const {
  addCompanies,
  changeCompanyProperty,
  changeCurrentSelectId,
  changeSelectCompany,
  selectAllCompanies,
} = companyModelSlice.actions;

export const useCompaniesIds = () => useSelector((state:RootState) => state.companies.ids);

export const useCompany = (companyId: number) =>
  useSelector(
    createSelector(
      (state: RootState) => state.companies.entities,
      (companies) => companies[companyId]
    )
  );

export const useCompanies = () =>
  useSelector((state: RootState) => state.companies.entities);

export const useSelectedCompaniesIds = () =>
  useSelector((state: RootState) => state.companies.selectedCompaniesIds);

export const useSelectedCompanyId = (id: number) =>
  useSelector((state: RootState) => state.companies.selectedCompaniesIds[id]);

export const useCurrentSelectedId = () =>
  useSelector((state: RootState) => state.companies.currentSelectId);

export const useCompanyEmployesCount = (companyId: number) =>
  useSelector(
    createSelector(
      (state: RootState) => state.companies.entities,
      (companies) => companies[companyId].employesCount
    )
  );

export const reducer = companyModelSlice.reducer;
