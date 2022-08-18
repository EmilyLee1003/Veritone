import { initialState } from "./initialState";
import * as types from "../../constants/actionTypes";

export const addItemReducer = (state = initialState, action) => {
  console.log("reducer state", state);
  console.log("reducer action", action);

  switch (action.type) {
    case types.ADD_ITEMS:
      return {
        ...state,
        [action.key]: action.value,
      };

    default: {
      return state;
    }
  }
};
