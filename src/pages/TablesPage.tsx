import { getCompanies, getEmployes } from 'src/shared/api';
import {
  memo,
  useEffect,
  useState
} from 'react';
import { CompaniesTable } from 'src/widget';
import { companyModel } from 'src/entites/company';
import { DeleteSelectedCompanies } from 'src/features/deleteCompanies';
import { employeeModel } from 'src/entites/employee';
import { EmployesTable } from 'src/widget/employee/ui/EmployesTable';
import { PAGINATION_COUNT } from 'src/shared/config';
import ReactLoading from 'react-loading';
import { useDispatch } from 'react-redux';

const CompaniesTableMemo = memo(CompaniesTable);
const EmployesTableMemo = memo(EmployesTable);

function TablesPage() {
  const dispatch = useDispatch();
  const currentSelectCompanyId = companyModel.useCurrentSelectedId();
  const [isCompaniesLoading, setIsCompaniesLoading] = useState<boolean>(true);
  const [isEmployesLoading, setIsEmployesLoading] = useState<boolean>(false);

  useEffect(() => {
    getCompanies(1, PAGINATION_COUNT).then((data) =>
    {
      dispatch(
        companyModel.addCompanies(
          {
            companies:            data,
            selectedCompaniesIds: [],
          }
        ));
      setIsCompaniesLoading(false);
    }
    );
  }, []);

  useEffect(() => {
    if(currentSelectCompanyId) {
      setIsEmployesLoading(true);
      getEmployes(1, PAGINATION_COUNT).then((data) => {
        dispatch(employeeModel.addEmployes({
          companyId:           currentSelectCompanyId,
          employes:            data,
        }));
        setIsEmployesLoading(false);
      });
    }
  }, [currentSelectCompanyId, dispatch]);

  return (
    <main style={{
      'alignItems':      'flex-start',
      'display':        'flex',
      'flexDirection':  'row',
      'justifyContent': 'flex-start',
      'marginLeft':     'auto',
      'marginRight':     'auto',
      'marginTop':      '1rem',
      'minHeight':      '100vh',
      'minWidth':       '100vw'
    }}
    >
      <h1 style={{ 'display': 'none' }}>Таблицы компаний и сотрудников</h1>
      <div style={{ 'width': '50%' }}>
        <h2>Компании</h2>
        <DeleteSelectedCompanies/>
        {isCompaniesLoading && <ReactLoading type='spin'/>}
        {!isCompaniesLoading && <CompaniesTableMemo />}
      </div>
      <div style={{ 'width': '50%' }}>
        <h2>Сотрудники</h2>
        {isEmployesLoading && <ReactLoading type='spin'/>}
        {!isEmployesLoading && <EmployesTableMemo companyId={currentSelectCompanyId} />}
      </div>
    </main>
  );
}

export default TablesPage;
