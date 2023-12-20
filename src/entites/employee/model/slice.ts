import {
  createSelector,
  createSlice,
  PayloadAction
} from '@reduxjs/toolkit';
import { addAndSort } from 'src/shared/utils';
import { Employee } from 'src/shared/api';
import { EmployeeChangableKeys } from './types';
import { useSelector } from 'react-redux';

export const initialState: {
  entities: Record<number, Record<number, Employee>>;
  ids: Record<number, number[]>;
  selectedEmployesIds: Record<number, Record<number, boolean>>;
} = {
  entities:             {},
  ids:                  {},
  selectedEmployesIds:  {},
};

export const employeeModel = createSlice({
  initialState: initialState,
  name:         'employes',
  reducers:     {
    addEmployes: (
      state,
      {
        payload,
      }: PayloadAction<{ companyId: number, employes: Employee[] }>
    ) => {
      if(!state.selectedEmployesIds[payload.companyId]) {
        state.selectedEmployesIds[payload.companyId] = {}; 
      }
      if(!state.ids[payload.companyId] ) {
        state.ids[payload.companyId] = [];
      }
      for (const employee of payload.employes) {
        if(!state.entities[payload.companyId]?.[employee.id]) {
          if(!state.entities[payload.companyId]) {
            state.entities[payload.companyId] = {};
          }
          state.entities[payload.companyId][employee.id] = employee;
          state.ids[payload.companyId] = addAndSort(state.ids[payload.companyId], employee.id);
        }
      }
      if(!state.selectedEmployesIds[payload.companyId]) {
        state.selectedEmployesIds[payload.companyId] = {};
      }
    },
    changeEmployProperty: ({ entities }, { payload }: PayloadAction<{companyId: number, id: number, value: string, type: EmployeeChangableKeys}>) => {
      entities[payload.companyId][payload.id][payload.type] = payload.value;
    },
    changeSelectEmployee: (
      { selectedEmployesIds },
      { payload }: PayloadAction<{companyId: number; id: number}>
    ) => {
      if(!selectedEmployesIds[payload.companyId]) {
        selectedEmployesIds[payload.companyId] = {};
      }
      selectedEmployesIds[payload.companyId][payload.id] = !selectedEmployesIds[payload.companyId][payload.id];
    },
    selectAllEmployes: (
      { entities, selectedEmployesIds },
      { payload }: PayloadAction<{companyId: number}>
    ) => {
      console.log(payload);
      const selectedEmployesIdsKeys = Object.keys(selectedEmployesIds[payload.companyId]);
      const isSelectedAll = selectedEmployesIdsKeys.length === 0 || selectedEmployesIdsKeys.some(id => selectedEmployesIds[payload.companyId][id as unknown as number] !== true)
      || (selectedEmployesIdsKeys.length !== Object.keys(entities[payload.companyId]).length); 
      console.log(selectedEmployesIdsKeys.length, Object.keys(entities[payload.companyId]).length);
      for (const id of Object.keys(entities[payload.companyId]) as unknown as number[]) {
        selectedEmployesIds[payload.companyId][id] = isSelectedAll;
      }
    },
  },
});

export const {
  addEmployes,
  changeEmployProperty,
  changeSelectEmployee,
  selectAllEmployes,
} = employeeModel.actions;

export const useEmployesIds = (companyId: number) => useSelector((state:RootState) => state.employes.ids[companyId]);

export const useEmployee = (companyId: number, employeeId: number) =>
  useSelector(
    createSelector(
      (state: RootState) => state.employes.entities[companyId],
      (employes) => employes[employeeId]
    )
  );

export const useEmployes= (companyId: number) =>
  useSelector((state: RootState) => state.employes.entities[companyId]);

export const useSelectedEmployesIds = (companyId: number) =>
  useSelector((state: RootState) => state.employes.selectedEmployesIds[companyId]);

export const useSelectedEmployee = (companyId: number, id: number) =>
  useSelector((state: RootState) => {
    return state.employes.selectedEmployesIds[companyId]?.[id];
  });

export const reducer = employeeModel.reducer;
