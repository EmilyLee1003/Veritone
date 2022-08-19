//  ties the store and action together. It carries out the state transition depending on the action
import { initialState } from './initialState';
import * as types from '../../constants/actionTypes';

export const addItemReducer = (state = initialState, action) => {
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
