import { all } from 'redux-saga/effects';

import searchGifsSaga from '@features/searchGifs/saga';

export default function* rootSaga() {
  yield all([searchGifsSaga()]);
}
