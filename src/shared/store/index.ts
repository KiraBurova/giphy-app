import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import searchGifsReducer from '@features/searchGifs/slice';

import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: searchGifsReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
