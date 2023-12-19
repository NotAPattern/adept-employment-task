import { fakeCompaniesRequest } from 'src/shared/fake-backend';

export const getCompanies = (startId: number = 1, count: number = 100) => {
  return fakeCompaniesRequest(startId, count);
};
