import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { rootReducer } from '../reducers/rootreducer';

const store = createStore(rootReducer, applyMiddleware(logger));

// console.log('INITIAL STATE', store.getState());
// // register listeners when state is updated
// store.subscribe(() => {
//   console.log('Updated State', store.getState());
// });
// //  allows state to be updated

export default store;
