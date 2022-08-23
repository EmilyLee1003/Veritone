import * as types from '../../constants/actionTypes';

export const deleteItem = (name) => {
  let newItem;
  return {
    type: types.DELETE_ITEM,
    payload: name,
  };
};

export const deleteItemSaga = (name) => {
  return {
    type: types.DELETE_ITEM_SAGA,
    payload: name,
  };
};
