import React, { useState, useReducer } from "react";
import GridItems from "../Grid/grid";
import Box from "@mui/material/Box";
import { editItemAction } from "../../redux/actions/editItemAction";
import { deleteItemAction } from "../../redux/actions/deleteItemAction";
import { initialState } from "../../redux/reducers/initialState";

export default function ShoppingList() {
  const [state, dispatch] = useReducer(editItemAction, initialState);

  const editButton = () => {
    console.log("edit button clicked");
  };

  const deleteButton = () => {
    console.log("delete button clicked");
  };
  return (
    <Box sx={{ width: "100%" }}>
      <GridItems edit={editButton} delete={deleteButton}></GridItems>
    </Box>
  );
}
