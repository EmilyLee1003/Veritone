// import {
//   take,
//   takeEvery,
//   takeLatest,
//   put,
//   all,
//   delay,
//   fork,
//   call,
// } from 'redux-saga/effects';

// // import {
// //   loadItemsError,
// //   loadItemsSuccess,
// //   loadItemsStart,
// // } from '../actions/loadItemsAction';
// import { addItemSaga } from '../actions/addItemAction';
// import { deleteItemSaga } from '../actions/deleteItemAction';
// // import { loadItemsApi, createItemApi } from '../../routes/api';
// import * as types from '../../constants/actionTypes';

// //saga argument must be a Generator function!
// // export function* onLoadItemsStartAsync() {
// //   try {
// //     const response = yield call(loadItemsApi);
// //     if (response.status === 200) {
// //       yield delay(500);
// //       yield put(loadItemsSuccess(response.data));
// //     }
// //   } catch (error) {
// //     yield put(loadItemsError(error.response.data));
// //   }
// // }
// // export function* onLoadItems() {
// //   yield takeEvery(types.LOAD_ITEMS_START, onLoadItemsStartAsync);
// // }

// // export function* onCreateItemStartAsync(payload) {
// //   try {
// //     const response = yield call(createItemApi, payload);
// //     if (response.status === 200) {
// //       yield put(addItemSuccess(response.data));
// //     }
// //   } catch (error) {
// //     yield put(addItemError(error.response.data));
// //   }
// // }
// // export function* onCreateItem() {
// //   yield takeLatest(types.ADD_ITEM_START, onCreateItemStartAsync);
// // }

// export function* onDeleteItemSaga({ payload: { name } }) {
//   yield put(deleteItemSaga(name));
// }

// export function* onDelete() {
//   yield takeLatest('DELETE_ITEM', onDeleteItemSaga);
// }

// export function* onAddItemSaga({ payload }) {
//   yield put(addItemSaga(payload));
// }

// export function* onAdd() {
//   yield takeLatest('ADD_ITEM', onAddItemSaga);
// }

// export function* rootSaga() {
//   yield all([call(onDelete), call(onAdd)]);
// }

// // export default function* rootSaga() {
// //   all([...itemSagas]);
// // }
