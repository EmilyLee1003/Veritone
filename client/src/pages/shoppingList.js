import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import GridItems from '../components/grid';
import Box from '@mui/material/Box';
import { editItemAction } from '../redux/actions/editItemAction';
import { deleteItem } from '../redux/actions/deleteItemAction';
import { initialState } from '../redux/reducers/initialState';
import BasicButton from '../components/button';
import AddModal from '../components/modal';
import { loadItemsStart } from '../redux/actions/loadItemsAction';
import { Typography } from '@mui/material';
import AllItems from '../components/allItems';
export default function ShoppingList() {
  const [openModal, setOpenModal] = useState(false);

  const state = useSelector((state) => state.data);

  console.log('STATE', state);

  const dispatch = useDispatch();

  const editButton = () => {
    console.log('edit button clicked');
    setOpenModal(true);
  };

  const deleteButton = (name) => {
    dispatch(deleteItem(name));
  };

  const closeModal = () => {
    setOpenModal(false);
    console.log('close modal clicked', openModal);
  };

  return (
    <div>
      <AddModal modal={openModal} setModal={editButton} close={closeModal} />
      <BasicButton variant="contained" name="Add Item" onClick={editButton} />
      {state &&
        state.map((item, index) => (
          <Box sx={{ width: '100%' }} key={index}>
            <Typography> {index}</Typography>
            <Typography> {item.name}</Typography>
            <BasicButton
              name="delete"
              variant="contained"
              value={item.name}
              onClick={() => deleteButton(item.name)}
            ></BasicButton>
            <BasicButton name="edit" variant="contained"></BasicButton>
          </Box>
        ))}
    </div>
  );
}
