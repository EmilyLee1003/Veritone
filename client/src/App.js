import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import ShoppingList from './pages/shoppingList';
import Bar from './components/appBar';
import Loading from './pages/loading';
import './App.css';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="App">
      <Bar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="loading" element={<Loading />} />
        <Route path="shoppingList" element={<ShoppingList />} />
      </Routes>
    </div>
  );
}

export default App;
