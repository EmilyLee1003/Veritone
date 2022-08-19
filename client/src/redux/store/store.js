import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import { rootReducer } from '../reducers/rootreducer';
import rootSaga from './itemSaga';

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

// console.log('INITIAL STATE', store.getState());
// // register listeners when state is updated
// store.subscribe(() => {
//   console.log('Updated State', store.getState());
// });
// //  allows state to be updated

export default store;
