/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { itemReducer } from './itemReducer';
// import { loadItemReducer } from './loadItem';

// import { editItems } from "./editItem";

export const rootReducer = combineReducers(
  // { data: loadItemReducer },
  { data: itemReducer }
);
