export type Company = {
  id: number;
  name?: string;
  address?: string;
  employesCount: number;
};

export type Employee = {
  id: number;
  lastName?: string;
  firstName: string;
  position: string;
};