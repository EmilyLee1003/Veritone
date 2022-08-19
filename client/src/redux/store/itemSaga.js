import {
  take,
  takeEvery,
  takeLatest,
  put,
  all,
  delay,
  fork,
  call,
} from 'redux-saga/effects';

import {
  loadItemsError,
  loadItemsSuccess,
  loadItemsStart,
} from '../actions/loadItemsAction';
import { loadItemsApi } from '../../routes/api';
import * as types from '../../constants/actionTypes';

//saga argument must be a Generator function!
export function* onLoadItemsStartAsync() {}
export function* onLoadItems() {
  yield takeEvery(types.LOAD_ITEMS_START, onLoadItemsStartAsync);
}

//  forking tasks will make them non-blocking so they will run smoothly in the background
const itemSagas = [fork(onLoadItems)];

export default function* rootSaga() {
  all([...itemSagas]);
}