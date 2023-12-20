import { Company } from 'src/shared/api';

export type CompanyChangableKeys = keyof Omit<Company, 'employesCount' | 'id'>;