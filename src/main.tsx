import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '@shared/store';

import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Suspense fallback='Loading...'>
          <App />
        </Suspense>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
