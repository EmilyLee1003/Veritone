import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loadItemsStart } from '../redux/actions/loadItemsAction';
import BasicButton from '../components/button';
import AddModal from '../components/modal';
// let navigate = useNavigate();

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.data);

  console.log('STATE', state);
  // //check
  // useEffect(() => {
  //   dispatch(addIt);
  // }, []);

  const addItemButton = () => {
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
    console.log('close modal clicked', openModal);
  };

  return (
    <div className="main">
      <div className="header">
        <h1> Your shopping list is empty:(</h1>
      </div>
      <BasicButton
        variant="contained"
        name="add items to your list"
        onClick={addItemButton}
      ></BasicButton>

      <div>
        {' '}
        <AddModal
          modal={openModal}
          setModal={addItemButton}
          close={closeModal}
        />{' '}
      </div>
    </div>
  );
}
