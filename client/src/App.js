import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/home.js";
import AddItem from "./components/AddItem/addItem.js";
import ShoppingList from "./components/ShoppingList/shoppingList.js";
import Bar from "./components/appBar/appBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Bar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="additem" element={<AddItem />} />
        <Route path="shoppingList" element={<ShoppingList />} />
      </Routes>
    </div>
  );
}

export default App;
