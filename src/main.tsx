import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback='Loading...'>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
