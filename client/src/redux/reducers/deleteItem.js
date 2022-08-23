import { initialState } from './initialState';
import * as types from '../../constants/actionTypes';

export const deleteItems = (state = initialState, action) => {
  let newItem;
  switch (action.type) {
    case types.DELETE_ITEM_SAGA:
      newItem = [...state];
      newItem = newItem.filter((item) => item.name != action.payload);
      return newItem;
    default:
      return state;
  }
};
