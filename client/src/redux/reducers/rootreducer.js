import { combineReducers } from "redux";
import { addItemReducer } from "./addItem";
import { deleteItems } from "./deleteItem";
import { editItems } from "./editItem";

export default combineReducers({ addItemReducer, deleteItems });
