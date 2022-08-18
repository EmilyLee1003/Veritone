import * as types from "../../constants/actionTypes";

export const addItemAction = (data) => {
  console.log("action is called", data);
  return {
    type: types.ADD_ITEMS,
    data,
  };
};
