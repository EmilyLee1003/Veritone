import * as types from "../../constants/actionTypes";

export const deleteItemAction = (data) => {
  console.log("action is called", data);
  return {
    type: types.DELETE_ITEMS,
    data,
  };
};
