import { Company } from 'src/shared/api';

export type CompanyChangableKeys = Omit<keyof Company, 'employesCount' | 'id'>;