//  ties the store and action together. It carries out the state transition depending on the action
import { initialState } from './initialState';
import * as types from '../../constants/actionTypes';

export const itemReducer = (state = initialState, action) => {
  let newItem;

  switch (action.type) {
    case types.ADD_ITEM:
      debugger;
      newItem = [...state];
      newItem.push(action.payload);
      return newItem;

    case types.DELETE_ITEM:
      debugger;
      newItem = [...state];
      newItem = newItem.filter((item) => item.name != action.payload);
      return newItem;

    default:
      return state;
  }
};
