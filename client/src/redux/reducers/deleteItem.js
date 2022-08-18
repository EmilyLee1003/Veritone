import { initialState } from "./initialState";
import * as types from "../../constants/actionTypes";

export const deleteItems = (state = initialState, action) => {
  console.log("reducer state", state);
  console.log("reducer action", action);

  switch (action.type) {
    case types.DELETE_ITEMS: {
      return {
        ...state,
        state: state.filter((item) => item !== action.data),
      };
    }
    default: {
      return state;
    }
  }
};
