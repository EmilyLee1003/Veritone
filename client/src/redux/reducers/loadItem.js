import { initialState } from './initialState';
import * as types from '../../constants/actionTypes';

export const loadItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_ITEMS_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOAD_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_ITEMS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
