import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Spinner from './components/molecules/spinner/Spinner';
const Main = lazy(() => import('./components/page/Main'));

const App = () => (
  <Suspense fallback={<Spinner />}>
    <Provider store={store}>
      <Main />
    </Provider>
  </Suspense>
);

export default App;
