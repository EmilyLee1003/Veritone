import * as types from '../../constants/actionTypes';

//describe the changes in the state of the application
export const addItemAction = (data) => {
  return {
    type: types.ADD_ITEMS,
    data,
  };
};
