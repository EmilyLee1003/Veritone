import * as types from '../../constants/actionTypes';

export const loadItemsStart = () => ({
  type: types.LOAD_ITEMS_START,
});

export const loadItemsSuccess = (data) => ({
  type: types.LOAD_ITEMS_SUCCESS,
  payload: data,
});

export const loadItemsError = (error) => ({
  type: type.LOAD_ITEMS_ERROR,
  payload: error,
});
