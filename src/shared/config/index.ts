const getEnvVar = (key: string) => {
  if (import.meta.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return import.meta.env[key] || '';
};

export const COMPANIES_COUNT = getEnvVar('VITE_COMPANIES_COUNT');
export const EMPLOYES_RANGE = getEnvVar('VITE_EMPLOYES_RANGE');
export const PAGINATION_COUNT = getEnvVar('VITE_PAGINATION_COUNT');