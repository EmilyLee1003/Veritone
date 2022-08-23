import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import BasicButton from '../components/button';
import AddForm from '../components/addForm';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function AddModal(props) {
  //modal not showing

  return (
    <div>
      <Modal
        open={props.modal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddForm />
          <BasicButton
            variant="outlined"
            name="Cancel"
            onClick={props.close}
          ></BasicButton>
        </Box>
      </Modal>
    </div>
  );
}
