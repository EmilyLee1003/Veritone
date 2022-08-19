import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadItemsStart } from '../redux/actions/loadItemsAction';
import BasicButton from '../components/button';
import AddModal from '../components/modal';

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  //check
  useEffect(() => {
    dispatch(loadItemsStart());
  }, []);

  const addItemButton = () => {
    setOpenModal(true);
  };
  console.log('addItemButton', openModal);
  // const openModal = () => {
  //   console.log('show modal button clicked');
  //   setModal(true);
  // };

  const closeModal = () => {
    console.log('close modal button clicked');
    setOpenModal(false);
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
