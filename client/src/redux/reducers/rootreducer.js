/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
// import { addItemReducer } from './addItem';
import { loadItemReducer } from './loadItem';
// import { deleteItems } from "./deleteItem";
// import { editItems } from "./editItem";

export const rootReducer = combineReducers({ data: loadItemReducer });
