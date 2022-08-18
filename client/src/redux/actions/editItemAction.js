import * as types from "../../constants/actionTypes";

export const editItemAction = (data) => {
  console.log("action is called", data);
  return {
    type: types.EDIT_ITEMS,
  };
};
