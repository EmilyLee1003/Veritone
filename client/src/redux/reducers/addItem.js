//  ties the store and action together. It carries out the state transition depending on the action
import { initialState } from './initialState';
import * as types from '../../constants/actionTypes';

export const addItemReducer = (state = initialState, action) => {
  let newITem;

  switch (action.type) {
    case types.ADD_ITEM_SAGA:
      newITem = [...state];
      newITem.push(action.payload);
      return newITem;
    default:
      return state;
  }
};
