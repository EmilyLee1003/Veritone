import React from 'react';
import { useSelector } from 'react-redux';

const AllItems = () => {
  let items = useSelector((state) => state.data);
  console.log('ALL ITEMS', items);
  return <div>shopping list</div>;
};

export default AllItems;
