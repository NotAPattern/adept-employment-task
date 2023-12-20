import { getCompanies, getEmployes } from 'src/shared/api';
import {
  memo,
  useEffect,
  useState
} from 'react';
import { CompaniesTable } from 'src/widget';
import { companyModel } from 'src/entites/company';
import { employeeModel } from 'src/entites/employee';
import { EmployesTable } from 'src/widget/employee/ui/EmployesTable';
import { PAGINATION_COUNT } from 'src/shared/config';
import ReactLoading from 'react-loading';
import { useDispatch } from 'react-redux';

const CompaniesTableMemo = memo(CompaniesTable);

function TablesPage() {
  const dispatch = useDispatch();
  const currentSelectCompanyId = companyModel.useCurrentSelectedId();
  // TODO:
  const [isCompaniesLoading, setIsCompaniesLoading] = useState<boolean>(true);
  const [isEmployesLoading, setIsEmployesLoading] = useState<boolean>(true);

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
  }, [currentSelectCompanyId]);

  return (
    <main style={{
      'alignItems':      'flex-start',
      'display':        'flex',
      'flexDirection':  'row',
      'justifyContent': 'center',
    }}
    >
      <div>
        {isCompaniesLoading && <ReactLoading type='spin'/>}
        {!isCompaniesLoading && <CompaniesTableMemo />}
      </div>
      <div>
        {/* TODO: add employes table */}
        {isEmployesLoading && <ReactLoading type='spin'/>}
        {!isEmployesLoading && <EmployesTable companyId={currentSelectCompanyId} />}
      </div>
    </main>
  );
}

export default TablesPage;
