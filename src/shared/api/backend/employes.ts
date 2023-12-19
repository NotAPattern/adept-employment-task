import { fakeEmployesRequest } from 'src/shared/fake-backend';

export const getEmployes = (
  startId: number = 1,
  employesCount: number = 100
) => {
  return fakeEmployesRequest(startId, employesCount);
};
