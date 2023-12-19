import { Provider } from 'react-redux';
import { store } from './store';
import TablesPage from 'src/pages/TablesPage';
import './styles/index.sass';

function App() {

  return (
    <Provider store={store}>
      <TablesPage/>
    </Provider>
  );
}

export default App;
