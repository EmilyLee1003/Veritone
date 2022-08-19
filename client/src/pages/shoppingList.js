import React, { useState, useReducer } from "react";
import GridItems from "../components/grid";
import Box from "@mui/material/Box";
import { editItemAction } from "../redux/actions/editItemAction";
import { deleteItemAction } from "../redux/actions/deleteItemAction";
import { initialState } from "../redux/reducers/initialState";
import BasicButton from "../components/button";

export default function ShoppingList() {
  const [state, dispatch] = useReducer(editItemAction, initialState);

  const editButton = () => {
    console.log("edit button clicked");
  };

  const deleteButton = () => {
    console.log("delete button clicked");
  };

  const submitButton = () => {
    console.log("submit button clicked", state);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <BasicButton variant="contained" name="Add Item" onClick={submitButton} />
      <GridItems edit={editButton} delete={deleteButton}></GridItems>
    </Box>
  );
}
