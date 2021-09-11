import { AxiosResponse } from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import { takeEvery, all, put, SimpleEffect } from 'redux-saga/effects';
import { MultiResponse } from 'giphy-api';
import { searchGifsAPI } from '@/shared/api';
import { actions } from './slice';

function* searchGifs(action: PayloadAction<string>): Generator<Promise<AxiosResponse> | SimpleEffect<'PUT'>, void, { data: MultiResponse }> {
  const result = yield searchGifsAPI(action.payload);
  const gifs = result?.data?.data;

  yield put({ type: actions.setSearchedGifs.type, payload: gifs });
}

function* watchSearchGifs() {
  yield takeEvery(actions.searchGifs.type, searchGifs);
}

export default function* searchGifsSaga() {
  yield all([watchSearchGifs()]);
}
