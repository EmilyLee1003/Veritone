import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootreducer from "../reducers/rootreducer";

const store = createStore(rootreducer);

export default store;
