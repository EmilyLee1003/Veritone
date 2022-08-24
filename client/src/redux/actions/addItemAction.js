import * as types from '../../constants/actionTypes';

//describe the changes in the state of the application

export const addItem = (item) => ({
  type: types.ADD_ITEM,
  payload: item,
});
