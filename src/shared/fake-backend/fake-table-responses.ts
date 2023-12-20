import { COMPANIES_COUNT, EMPLOYES_RANGE } from '../config';
import { Company, Employee } from 'src/shared/api';
import { faker } from '@faker-js/faker';

export function fakeCompaniesRequest(
  startId?: number,
  count: number = 100
): Promise<Company[]> {
  faker.seed(42);
  return new Promise((res) => {
    setTimeout(() => {
      const data = [];
      const endIndex = count <= COMPANIES_COUNT ? count : COMPANIES_COUNT;
      const startIndex = startId ?? 1;
      for (let i = 0; i < endIndex; i++) {
        data.push({
          address:       faker.location.streetAddress(),
          employesCount: faker.number.int({
            max: EMPLOYES_RANGE,
            min: 1,
          }),
          id:   startIndex + i,
          name: faker.company.name(),
        });
      }
      return res(data);
    }, 300);
  });
}

export function fakeEmployesRequest(
  startId: number,
  count: number = 100
): Promise<Employee[]> {
  return new Promise((res) => {
    setTimeout(() => {
      const data = [];
      const endIndex = count <= EMPLOYES_RANGE ? count : EMPLOYES_RANGE;
      const startIndex = startId ?? 1;
      for (let i = startIndex ?? 1; i < endIndex + 1; ++i) {
        data.push({
          firstName: faker.person.firstName(),
          id:        startIndex + i,
          lastName:  faker.person.lastName(),
          position:  faker.person.jobTitle(),
        });
      }
      return res(data);
    }, 200);
  });
}
