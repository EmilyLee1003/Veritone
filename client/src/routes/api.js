import axios from 'axios';

export const loadItemsApi = async () =>
  await axios.get('http://localhost:3000/items');
