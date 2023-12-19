import {
  memo,
  useEffect,
  useState
} from 'react';
import { CompaniesTable } from 'src/widget';
import { companyModel } from 'src/entites/company';
import { getCompanies } from 'src/shared/api';
import { PAGINATION_COUNT } from 'src/shared/config';
import ReactLoading from 'react-loading';
import { useDispatch } from 'react-redux';

// eslint-disable-next-line react-refresh/only-export-components
const CompaniesTableMemo = memo(CompaniesTable);

// eslint-disable-next-line react-refresh/only-export-components
function TablesPage() {
  const dispatch = useDispatch();
  // TODO:
  const [isCompaniesLoading, setIsCompaniesLoading] = useState<boolean>(true);
  // const [employesLoading, setEmployesLoading] = useState<boolean>(false);

  useEffect(() => {
    getCompanies(1, PAGINATION_COUNT).then((data) =>
    {
      dispatch(
        companyModel.addCompanies({
          companies:         data,
          selectedCompanies: [1, 2],
        }));
      setIsCompaniesLoading(false);
    }
    );
  }, []);

  return (
    <main>
      {isCompaniesLoading && <ReactLoading type='spin'/>}
      {!isCompaniesLoading && <CompaniesTableMemo />}
    </main>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(TablesPage);
